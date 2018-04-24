var form = document.createElement('form');
var divEl = document.getElementsByTagName('div')[0];
divEl.appendChild(form);
form.name = 'login';
form.action = 'google.com';

var inputAge = document.createElement('input');
inputAge.type = 'text';
inputAge.name = 'age';
inputAge.placeholder = 'Input age';
form.insertAdjacentElement('beforeend', inputAge);

var inputName = document.createElement('input');
inputName.type = 'text';
inputName.name = 'username';
inputName.placeholder = 'Input name';
form.insertAdjacentElement('beforeend', inputName);


var inputDate = document.createElement('input');
inputDate.type = 'text';
inputDate.name = 'date';
inputDate.placeholder = 'Input date';
form.insertAdjacentElement('beforeend', inputDate);

var inputSubmit = document.createElement('input');
inputSubmit.type = 'submit';
inputSubmit.value = 'Validate Me';
form.insertAdjacentElement('beforeend', inputSubmit);

inputSubmit.addEventListener('click', validate);

function validate(e) {
    e.preventDefault();

    var regexAge = /[^0-9]/;
    var regexName = /^user_+/;
    var regexDate = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

    if (regexAge.test(inputAge.value) || !regexName.test(inputName.value) || !regexDate.test(inputDate.value)) {
        alert('Your data is invalid');
        inputAge.style.border = "3px solid red"
        inputName.style.border = "3px solid red"
        inputDate.style.border = "3px solid red"
    };

}