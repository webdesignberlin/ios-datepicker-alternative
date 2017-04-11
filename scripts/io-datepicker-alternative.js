/**
 * Created by Michael.Gerstmann on 10.04.2017.
 */
function initDay(datePicker) {
  console.log('initday', datePicker._elsDay);
  let _elsDay = datePicker._elsDay;
  for (let fieldItem of _elsDay){
    console.log(fieldItem);
    fieldItem.addEventListener('click', function () {
      console.log(fieldItem);
      let value = fieldItem.dataset.dateValue;
      datePicker.setDay(value)
    });
  }
}

function initMonth(datePicker) {
  let _elsMonth = datePicker._elsMonth;
  for (let fieldItem of _elsMonth){
    fieldItem.addEventListener('click', function () {
      let value = fieldItem.dataset.dateValue;
      datePicker.setMonth(value)
    });
  }
}

function initYear(datePicker) {
  let _elsYear = datePicker._elsYear;
  for (let fieldItem of _elsYear){
    fieldItem.addEventListener('click', function () {
      let value = fieldItem.dataset.dateValue;
      datePicker.setYear(value)
    });
  }
}

function getWrapper(){
  return document.querySelector('.date');
}

class datePicker {
  constructor(dateInput){
    this._elDateInput = dateInput;
    this._elWrapper = document.querySelector('.date');
    this._elDayWrapper = this._elWrapper.querySelectorAll('.date-field--day')[0];
    this._elsDay = this._elDayWrapper.querySelectorAll('.date-field__item');
    this._elMonthWrapper = this._elWrapper.querySelectorAll('.date-field--month')[0];
    this._elsMonth = this._elMonthWrapper.querySelectorAll('.date-field__item');
    this._elYearWrapper = this._elWrapper.querySelectorAll('.date-field--year')[0];
    this._elsYear = this._elYearWrapper.querySelectorAll('.date-field__item');
    this.enteredDate = {
      year: '',
      month: '',
      day: ''
    };
  }

  setDay(day){
    let datePicker = this;
    let elsDayItems = datePicker._elsDay;
    let elActiveDay = datePicker._elDayWrapper.querySelectorAll(`[data-date-value="${day}"]`)[0];

    for (let elsDayItem of elsDayItems) {
      elsDayItem.classList.remove('date-field__item--active')
    }
    elActiveDay.classList.add('date-field__item--active');
    datePicker.enteredDate.day = day;
    datePicker.returnDate();
  }

  getDay(){
    let datePicker = this;
    let elActiveDay = datePicker._elDayWrapper.querySelectorAll('.date-field__item--active');

    if (elActiveDay.length > 0) {
      return elActiveDay[0].dataset.dateValue;
    }
    return null;
  }

  /*getDay(){
   let datePicker = this;
   let elActiveDay = datePicker._elDayWrapper.querySelectorAll(`.date-field__item--active`)[0];
   console.log('getDay', elActiveDay.dataset.dateValue);
   console.log(datePicker.enteredDate);
   //return elActiveDay.dataset.dateValue;
   }*/

  getMonth(){
    let datePicker = this;
    let elActiveMonth = datePicker._elMonthWrapper.querySelectorAll('.date-field__item--active');

    if (elActiveMonth.length > 0) {
      return elActiveMonth[0].dataset.dateValue;
    }
    return null;
  }

  getYear(){
    let datePicker = this;
    let elActiveYear = datePicker._elYearWrapper.querySelectorAll('.date-field__item--active');

    if (elActiveYear.length > 0) {
      return elActiveYear[0].dataset.dateValue;
    }
    return null;
  }

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

    /*console.log('days in month: ', moment(datePicker.getYear()+'-'+datePicker.getMonth(), 'YYYY-MM').daysInMonth());*/
    //moment("2017-02", "YYYY-MM").daysInMonth()
  }

  setMonth(month){
    let datePicker = this;
    let elsMonthItems = datePicker._elsMonth;
    let elActiveMonth = datePicker._elMonthWrapper.querySelectorAll(`[data-date-value="${month}"]`)[0];

    for (let elMonthItem of elsMonthItems) {
      elMonthItem.classList.remove('date-field__item--active')
    }
    elActiveMonth.classList.add('date-field__item--active');
    datePicker.enteredDate.month = month;
    datePicker.getDaysInMonth();
    datePicker.returnDate();
  }

  setYear(year, scrollToActive = false){
    let datePicker = this;
    let elsYearItems = datePicker._elsYear;
    let elActiveYear = datePicker._elYearWrapper.querySelectorAll(`[data-date-value="${year}"]`)[0];

    for (let elYearItem of elsYearItems) {
      elYearItem.classList.remove('date-field__item--active')
    }
    elActiveYear.classList.add('date-field__item--active');

    if(scrollToActive === true) {
      //elActiveYear.scrollIntoView(false);
      const elementRect = elActiveYear.getBoundingClientRect();
      const container = datePicker._elYearWrapper;
      // const absoluteElementTop = elementRect.top + container.scrollTop;
      const absoluteElementTop = elActiveYear.offsetTop + container.scrollTop;
      const middle = absoluteElementTop - (container.offsetHeight / 2);
      container.scrollTop = middle;
    }

    datePicker.enteredDate.year = year;
    datePicker.getDaysInMonth();
    datePicker.returnDate();
  }

  returnDate(){
    let datePicker = this;
    /*let checkDate = [
     datePicker.enteredDate.year,
     datePicker.enteredDate.month,
     datePicker.enteredDate.day
     ];*/
    let checkDate = datePicker.enteredDate.year + '-' + datePicker.enteredDate.month + '-' + datePicker.enteredDate.day;

    if (checkDate.match(/^(\d{4})\-(\d{1,2})\-(\d{1,2})$/)) {
      this._elDateInput.value = datePicker.enteredDate.year + '-' + datePicker.enteredDate.month + '-' + datePicker.enteredDate.day;
    }
    /*console.log(moment(checkDate).isValid());
     if (moment(checkDate).isValid() === true) {
     this._elDateInput.value = moment(checkDate).format('YYYY-MM-DD');
     }*/
  }

  init(){
    let datePicker = this;
    initDay(datePicker);
    initMonth(datePicker);
    initYear(datePicker);

    document.addEventListener('updatedDays', function(e){
      console.log('fire');
      initDay(datePicker);
    });
  }

}