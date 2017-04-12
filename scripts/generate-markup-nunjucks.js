/**
 * Created by Michael.Gerstmann on 10.04.2017.
 */
function generateYears(startYear = 1984) {
  let currentYear = new Date().getFullYear(), years = [];

  while ( startYear <= currentYear ) {
    years.push(startYear++);
  }

  return years;
}


let templateOptions = {
  years: generateYears(new Date().getFullYear() - 100),
  months: ['01','02','03','04','05','06','07','08','09','10','11','12'],
  days: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
  foo: 'works'
};

/*let markupYears = ({ templateOptions }) => {
 return `
 <div class="date">
 <div class="date-fields">
 <div class="date-field date-field--day">
 <ul class="date-list"><li class="date-list__item">
 <button class="date-field__item" data-date-field="day" data-date-value="{{ day }}">${templateOptions.year}</button></li></ul>
 </div>
 <div class="date-field date-field--month">
 <ul class="date-list"><li class="date-list__item">
 <button class="date-field__item" data-date-field="day" data-date-value="{{ day }}">${year}</button></li></ul>
 </div>
 <div class="date-field date-field--year">
 <ul class="date-list"><li class="date-list__item">
 <button class="date-field__item" data-date-field="day" data-date-value="{{ day }}">${year}</button></li></ul>
 </div>
 </div>
 </div>
 `;
 };*/


nunjucks.configure('views', { autoescape: true });
let dateTemplate = nunjucks.render('/_date-form-template.nunjucks', templateOptions);
let elTarget = document.getElementById('date-wrapper');
function dateMarkup() {
  elTarget.insertAdjacentHTML('beforeend', dateTemplate);
}

dateMarkup();