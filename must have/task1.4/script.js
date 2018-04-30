var textEls = document.getElementsByClassName('text');
var radio = document.querySelectorAll('.radio');
var langEls = Array.from(radio);
var $submitButton = document.forms[0].elements[3];


if (localStorage.lang) {
    var defaultLang = localStorage.lang;
    showText();
} else {
    var defaultLang = 'ua';
    showText();
};


for (i = 0; i < langEls.length; i++) {
    langEls[i].addEventListener('click', changeLang)
};



$submitButton.addEventListener('click', saveToStorage);

function saveToStorage() {
    localStorage.setItem('lang', defaultLang);
    alert('Your language is ' + defaultLang);
};

function showText() {
    for (var i = 0; i < textEls.length; i++) {
        if (textEls[i].getAttribute('data-version') == defaultLang) {
            textEls[i].style.display = 'block';
        } else {
            textEls[i].style.display = 'none';
        }
    }
};

function changeLang(event) {
    defaultLang = event.target.value;
    showText();
};
document.querySelector(".radio").checked = true;