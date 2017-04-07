/**
 * Created by Michael.Gerstmann on 06.04.2017.
 */

export default class datePicker {
  constructor(wrapper){
    this._elWrapper = wrapper;
    this._elDay = wrapper.querySelectorAll('.date-field--day')[0];
  }

  setDay(day){
    //let elActiveDay = this._elDay.querySelectorAll(`[data-date-value="${day}"]`)[0];
    let elsDayItems = this._elDay.querySelectorAll('.date-field__item');
    let elActiveDay = this._elDay.querySelectorAll(`[data-date-value="${day}"]`)[0];

    for (let elsDayItem of elsDayItems) {
      elsDayItem.classList.remove('date-field__item--active')
    }
    elActiveDay.classList.add('date-field__item--active');
    console.log(day, elActiveDay);
  }

  init(){
    for (let fieldItem of this._elWrapper.querySelectorAll('.date-field__item')){
      fieldItem.addEventListener('click', function () {
        let value = fieldItem.dataset.dateValue;
        console.log(value);
        this.setDay(value);
      });
    }
  }

}