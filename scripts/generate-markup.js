/**
 * Created by Michael.Gerstmann on 10.04.2017.
 */

var hyperHTML=function(){"use strict";/*! (C) 2017 Andrea Giammarchi @WebReflection (MIT) */
  function e(e){return w in this&&this[w].s===e?y.apply(this,arguments):v.apply(this,arguments)}function t(e,t){for(var n,r=x?T:C,i=D.call(e.attributes),a=0,c=i.length;a<c;a++)n=i[a],n.value===r&&t.push(o(e,x?e.getAttributeNode(b.shift()):n))}function n(e,o){for(var c,l,u=D.call(e.childNodes),s=u.length,d=0;d<s;d++)switch(c=u[d],c.nodeType){case 1:t(c,o),n(c,o);break;case 8:c.textContent===T&&(1===s?(o.push(r(e)),e.removeChild(c)):!(d<1||1===u[d-1].nodeType)||d+1!==s&&1!==u[d+1].nodeType?(l=e.ownerDocument.createTextNode(""),o.push(a(l)),e.replaceChild(l,c)):o.push(i(c)))}}function r(e){return function t(n){switch(typeof n){case"string":e.innerHTML=n;break;case"number":case"boolean":e.textContent=n;break;default:if(Array.isArray(n))if(1===n.length)t(n[0]);else if("string"==typeof n[0])t(n.join(""));else{var r=l(e.childNodes,n);-1<r&&p(e,n,r)}else s(e,n)}}}function o(e,t){var n=t.name,r=N.test(n);return r&&e.removeAttribute(n),r?function(t){e[n]=t}:function(e){t.value=e}}function i(e){var t=document.createDocumentFragment(),n=[];return function r(o){var i,a=e.parentNode;switch(typeof o){case"string":case"number":case"boolean":d(n,0),u(t,o),n=D.call(t.childNodes),a.insertBefore(t,e);break;default:Array.isArray(o)?0===o.length?r(o[0]):"string"==typeof o[0]?r(o.join("")):-1<(i=l(n,o))&&(d(n,i),o=o.slice(i),c(t,o),a.insertBefore(t,e),n.push.apply(n,o)):(d(n,0),n=11===o.nodeType?D.call(o.childNodes):[o],a.insertBefore(o,e))}}}function a(e){return function(t){e.textContent=t}}function c(e,t){for(var n=0,r=t.length;n<r;n++)e.appendChild(t[n])}function l(e,t){if(e===t)return-1;for(var n=0,r=e.length,o=t.length;n<r;){if(!(n<o&&e[n]===t[n]))return n;n++}return n===o?-1:n}function u(e,t){var n=x&&/^[^\S]*?<(t(?:head|body|foot|r|d|h))/i.test(t),r=e.ownerDocument.createElement("template");r.innerHTML=n?"<table>"+t+"</table>":t,n&&(r={childNodes:r.querySelectorAll(RegExp.$1)}),c(e,D.call((r.content||r).childNodes))}function s(e,t){switch(t.nodeType){case 1:var n=e.childNodes;1===n.length&&n[0]===t||h(e,t);break;case 11:-1<l(e.childNodes,t.childNodes)&&h(e,t);break;case 3:e.textContent=t.textContent}}function d(e,t){for(var n,r=e.length;t<r--;)n=e[r],n.parentNode.removeChild(n)}function h(e,t){e.textContent="",e.appendChild(t)}function f(e){for(var t,n=[],r=e.childNodes,o=0,i=r.length;o<i;o++)t=r[o],(1===t.nodeType||0<M.call(t.textContent).length)&&n.push(t);return i=n.length,i<2?(t=i<1?e:n[0],function(){return t}):function(){return n}}function p(e,t,n){var r=e.ownerDocument.createDocumentFragment();0<n?(d(e.childNodes,n),c(r,t.slice(n)),e.appendChild(r)):(c(r,t),h(e,r))}function m(t){var n,r,o,i,a,l;return function(u){return l!==u&&(a=!0,l=u,o=document.createDocumentFragment(),r="svg"===t?document.createElementNS("http://www.w3.org/2000/svg","svg"):o,i=e.bind(r)),i.apply(null,arguments),a&&(a=!1,"svg"===t&&c(o,D.call(r.childNodes)),n=f(o)),n()}}function g(e,t){var n=m(t);return E.set(e,n),n}function y(){for(var e=1,t=arguments.length,n=this[w].u;e<t;e++)n[e-1](arguments[e]);return this}function v(e){var t=[],r=e.join(C);return x?(b=[],u(this,r.replace(k,A))):1===this.nodeType?this.innerHTML=r:u(this,r),n(this,t),this[w]={s:e,u:t},y.apply(this,arguments)}e.wire=function(e,t){return arguments.length<1?m("html"):null==e?m(t||"html"):E.get(e)||g(e,t||"html")};var b,N=/^(?:(?:on|allow)[a-z]+|async|autofocus|autoplay|capture|checked|controls|default|defer|disabled|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|nomodule|novalidate|open|playsinline|readonly|required|reversed|selected|truespeed|typemustmatch|usecache)$/,w="_hyper_html: ",T=w+(Math.random()*new Date|0)+";",C="<!--"+T+"-->",x="documentMode"in document,k=x&&new RegExp("([^\\S][a-z]+[a-z0-9_-]*=)(['\"])"+C+"\\2","g"),A=x&&function(e,t,n){return b.push(t.slice(1,-1)),t+n+T+n},M=w.trim||function(){return this.replace(/^\s+|\s+$/g,"")},D=[].slice,E=typeof WeakMap==typeof E?{get:function(e){return e[w]},set:function(e,t){Object.defineProperty(e,w,{configurable:!0,value:t})}}:new WeakMap;return e.SPECIAL_ATTRIBUTE=N,e}();try{module.exports=hyperHTML}catch(e){}

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
