/**
 * Created by Michael.Gerstmann on 10.04.2017.
 */

/**
 * Add Event listener to day fields
 * @param datePicker
 */
function initDay(datePicker) {
  let _days = document.querySelectorAll(
    datePicker._dayWrapper + ' ' + datePicker._item
  );
  for (let fieldItem of _days){
    fieldItem.addEventListener('click', function () {
      let value = fieldItem.dataset.dateValue;
      datePicker.setDay(value)
    });
  }
}

/**
 * Add Event listener to month fields
 * @param datePicker
 */
function initMonth(datePicker) {
  let _months = document.querySelectorAll(
    datePicker._monthWrapper + ' ' + datePicker._item
  );

  for (let fieldItem of _months){
    fieldItem.addEventListener('click', function () {
      let value = fieldItem.dataset.dateValue;
      datePicker.setMonth(value)
    });
  }
}

/**
 * Add Event listener to year fields
 * @param datePicker
 */
function initYear(datePicker) {
  let _years = document.querySelectorAll(
    datePicker._yearWrapper + ' ' + datePicker._item
  );

  for (let fieldItem of _years){
    fieldItem.addEventListener('click', function () {
      let value = fieldItem.dataset.dateValue;
      datePicker.setYear(value)
    });
  }
}

class datePicker {
  /**
   * date picker instance
   * @param {HTMLElement} dateInput - Input Field
   */
  constructor(dateInput){
    this._elDateInput = dateInput;
    //this._elWrapper = document.querySelector('.date');
    this._dayWrapper = '.date-field--day';
    this._monthWrapper = '.date-field--month';
    this._yearWrapper = '.date-field--year';
    this._item = '.date-field__item';
    this.enteredDate = {
      year: '',
      month: '',
      day: ''
    };
  }

  /**
   * Set a day
   * @param {string} day - 01 - 31
   */
  setDay(day){
    let datePicker = this;
    let _days = document.querySelectorAll(
      datePicker._dayWrapper + ' ' + datePicker._item
    );

    for (let _item of _days) {
      _item.classList.remove('date-field__item--active')
    }

    document.querySelector(`${datePicker._dayWrapper} [data-date-value="${day}"]`).classList.add('date-field__item--active');
    datePicker.enteredDate.day = day;
    datePicker.returnDate();
  }

  clear(){
    let datePicker = this;
    let _items = document.querySelectorAll(datePicker._item);
    for(let _item of _items){
    _item.classList.remove('date-field__item--active')
    }
  }

  /**
   * Set a month
   * @param {string} month - 01 -12
   */
  setMonth(month){
    let datePicker = this;
    let _months = document.querySelectorAll(
      datePicker._monthWrapper + ' ' + datePicker._item
    );

    for (let _item of _months) {
      _item.classList.remove('date-field__item--active')
    }

    document.querySelector(`${datePicker._monthWrapper} [data-date-value="${month}"]`).classList.add('date-field__item--active');
    datePicker.enteredDate.month = month;
    datePicker.getDaysInMonth();
    datePicker.returnDate();
  }

  /**
   * Set a Year
   * @param {string} year
   * @param {boolean} scrollToActive - if true scroll to selected year
   */
  setYear(year, scrollToActive = false){
    let datePicker = this;
    let _years = document.querySelectorAll(
      datePicker._yearWrapper + ' ' + datePicker._item
    );

    for (let _item of _years) {
      _item.classList.remove('date-field__item--active')
    }

    let elActiveYear = document.querySelector(`${datePicker._yearWrapper} [data-date-value="${year}"]`);
    elActiveYear.classList.add('date-field__item--active');
    datePicker.enteredDate.year = year;
    datePicker.returnDate();

    if(scrollToActive === true) {
      //elActiveYear.scrollIntoView(false);
      const elementRect = elActiveYear.getBoundingClientRect();
      const container = document.querySelector(datePicker._yearWrapper);
      // const absoluteElementTop = elementRect.top + container.scrollTop;
      const absoluteElementTop = elActiveYear.offsetTop + container.scrollTop;
      const middle = absoluteElementTop - (container.offsetHeight / 2);
      container.scrollTop = middle;
    }

    datePicker.enteredDate.year = year;
    datePicker.getDaysInMonth();
    datePicker.returnDate();
  }

  /**
   * Get selected Day
   * @returns {string} - Data Value of current Day. e.g. 31
   */
  getDay(){
    let datePicker = this;
    let elDayWrapper = document.querySelectorAll(datePicker._dayWrapper)[0];
    let elActiveDay = elDayWrapper.querySelectorAll('.date-field__item--active');

    if (elActiveDay.length > 0) {
      return elActiveDay[0].dataset.dateValue;
    }
    return null;
  }

  /**
   * Get selected Month
   * @returns {string} - Data Value of selected Month. e.g 12
   */
  getMonth(){
    let datePicker = this;
    let elMonthWrapper = document.querySelectorAll(datePicker._monthWrapper)[0];
    let elActiveMonth = elMonthWrapper.querySelectorAll('.date-field__item--active');

    if (elActiveMonth.length > 0) {
      return elActiveMonth[0].dataset.dateValue;
    }
    return null;
  }

  /**
   * Get selected Year
   * @returns {string} - Data Value of selected Year. e.g. 1984
   */
  getYear(){
    let datePicker = this;
    let elYearWrapper = document.querySelectorAll(datePicker._yearWrapper)[0];
    let elActiveYear = elYearWrapper.querySelectorAll('.date-field__item--active');

    if (elActiveYear.length > 0) {
      return elActiveYear[0].dataset.dateValue;
    }
    return null;
  }

  /**
   * Get Days of selected Month/Year combination. e.g. 28.
   * Also creates custom Event to trigger template rebuild of days
   */
  getDaysInMonth(){
    let datePicker = this;

    let updateDaysInMonth = new CustomEvent('updateDaysInMonth', {
      detail: {
        days: moment(datePicker.getYear()+'-'+datePicker.getMonth(), 'YYYY-MM').daysInMonth(),
        activeDay: datePicker.getDay()
      }
    });

    if (datePicker.getMonth() && datePicker.getYear()){
      document.dispatchEvent(updateDaysInMonth);
    }
  }

  /**
   * Return Date add valid Date to given input
   */
  returnDate(){
    let datePicker = this;
    let checkDate = datePicker.enteredDate.year + '-' + datePicker.enteredDate.month + '-' + datePicker.enteredDate.day;

    if (checkDate.match(/^(\d{4})\-(\d{1,2})\-(\d{1,2})$/)) {
      this._elDateInput.value = datePicker.enteredDate.year + '-' + datePicker.enteredDate.month + '-' + datePicker.enteredDate.day;
    }
  }

  /**
   * Init Function
   * Also listen for re-render of day template
   */
  init(){
    let datePicker = this;
    initDay(datePicker);
    initMonth(datePicker);
    initYear(datePicker);

    document.addEventListener('updatedDays', function(){
      initDay(datePicker);
    });
  }

}