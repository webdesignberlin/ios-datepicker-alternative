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

var a = 5;
var b = 10;
function blubb() {
  return `lorem is ${a + b} and\nnot ${2 * a + b}.`;
}


let templateOptions = {
  years: generateYears(new Date().getFullYear() - 100),
  months: ['01','02','03','04','05','06','07','08','09','10','11','12'],
  days: generateDays(31),
  foo: 'works'
};

function generateDays(days = 31){
  let daysOutput = [];
  for(let i = 1; i <= days; i++){
    if(i < 10){
      i = '0'+i;
    }
    daysOutput.push(i);
  }
  return daysOutput;
}

/*let markupYears = ({ templateOptions }) => {
 return `<div class="date">
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
 };
*/

/*nunjucks.configure('views', { autoescape: true });
let dateTemplate = nunjucks.render('/_date-form-template.nunjucks', templateOptions);
let elTarget = document.getElementById('date-wrapper');
function dateMarkup() {
  elTarget.insertAdjacentHTML('beforeend', dateTemplate);
}

dateMarkup();*/

console.log(templateOptions.foo);
console.log(templateOptions.months);

const tmplWrapper = content =>`
<div class="date">
<div class="date-fields">
${content}
</div>
</div>`;

/*const tmplMonths = months => `
<div class="date-field date-field--month">
  <ul class="date-list">
    ${months.map(month => `
    <li class="date-list__item">
      <button class="date-field__item" data-date-field="month" data-date-value="${month}">
        ${month} ${month[0]} {{ loop.index }}</button>
    </li>
    `).join('')}
  </ul>
</div>
`;*/
const tmplMonths = (months) => `
<div class="date-field date-field--month">
  <ul class="date-list">
  ${months.map((month, i) => 
    `
    <li class="date-list__item">
      <button class="date-field__item" data-date-field="month" data-date-value="${month}">
        ${month} ${i+1}</button>
    </li>
    `
  ).join('')}
  </ul>
</div>
`;

const tmplYears = (years) => `
<div class="date-field date-field--year">
  <ul class="date-list">
  ${years.map((year, i) =>
  `
    <li class="date-list__item">
      <button class="date-field__item" data-date-field="year" data-date-value="${year}">
        ${year} ${i+1}</button>
    </li>
    `
).join('')}
  </ul>
</div>
`;

const tmplDays = (days) => `
<div class="date-field date-field--day">
  <ul class="date-list">
  ${days.map((day, i) =>
  `
    <li class="date-list__item">
      <button class="date-field__item" data-date-field="day" data-date-value="${day}">
        ${day} ${i+1}</button>
    </li>
    `
).join('')}
  </ul>
</div>
`;


let elTarget = document.getElementById('date-wrapper');
function dateMarkup() {
  elTarget.insertAdjacentHTML('beforeend', tmplWrapper(
    tmplDays(templateOptions.days)+
    tmplMonths(templateOptions.months)+
    tmplYears(templateOptions.years)
    )
  );
}
dateMarkup();
generateDays();

document.addEventListener('updateDaysInMonth', function(e){
  let dayWrapper = document.querySelectorAll('.date-field--day');
  if(dayWrapper.length > 0){
    dayWrapper[0].innerHTML = tmplDays(generateDays(e.detail.days));
  }
});
