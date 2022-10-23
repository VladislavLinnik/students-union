const checkboxesElement = document.querySelectorAll('.js-probabilityCheckbox');
const progressLineElement = document.querySelector('.js-progressLine');
const progressNumberElement = document.querySelector('.js-progressNumber');
let percent = 0;

checkboxesElement.forEach(element => {
   element.onchange = function() {
       if (element.checked) {
           percent += Number(element.value);
           progressLineElement.style.width = `${percent}%`;
           progressNumberElement.textContent = `${percent}%`;
       } else {
           percent -= element.value;
           progressLineElement.style.width = `${percent}%`;
           progressNumberElement.textContent = `${percent}%`;
       }
   }
});
