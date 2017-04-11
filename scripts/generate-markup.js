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
  days: generateDays(31),
  foo: 'works'
};

function generateDays(days = {days: 31}){
  let daysOutput = [];
  for(let i = 1; i <= days; i++){
    if(i < 10){
      i = '0'+i;
    }
    daysOutput.push(i.toString());
  }
  return daysOutput;
}

const tmplWrapper = content =>`
<div class="date">
<div class="date-fields">
${content}
</div>
</div>`;

const tmplMonths = (months) => `
<div class="date-field date-field--month">
  <ul class="date-list">
  ${months.map((month, i) => 
    `
    <li class="date-list__item">
      <button class="date-field__item" data-date-field="month" data-date-value="${month}">
        ${i+1}</button>
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
        ${year}</button>
    </li>
    `
).join('')}
  </ul>
</div>
`;

const printActiveDayClass = function(activeClass, currentDay){
  if (activeClass === currentDay){
    return 'date-field__item--active'
  }
  return ''
};

const tmplDays = (options) => `
<div class="date-field date-field--day">
  <ul class="date-list">
  ${options.days.map((day, i) =>
  `
    <li class="date-list__item">
      <button class="date-field__item `+ printActiveDayClass(options.activeDay, day) +`" data-date-field="day" data-date-value="${day}">
        ${i+1}</button>
    </li>
    `
).join('')} 
  </ul>
</div>
`;


let elTarget = document.getElementById('date-wrapper');
function dateMarkup() {
  elTarget.insertAdjacentHTML('beforeend', tmplWrapper(
    tmplDays(templateOptions)+
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
    let mergedConfig = Object.assign({}, templateOptions, {
      days: generateDays(e.detail.days),
      activeDay: e.detail.activeDay
    });
    dayWrapper[0].outerHTML = tmplDays(mergedConfig);

    let updatedDays = new CustomEvent('updatedDays', {});
    document.dispatchEvent(updatedDays);

  }
});
