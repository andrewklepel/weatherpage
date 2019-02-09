// various utility classes

var setElement = function(selector, value) {
    document.getElementsByClassName(selector)[0].innerHTML = value;
}

var removeClass = function(selector, value) {
    classes = document.getElementsByClassName(selector)[0].className;
    document.getElementsByClassName(selector)[0].className = classes.replace(value, '');
}

var addClass = function(selector, value) {
    classes = document.getElementsByClassName(selector)[0].className;
    document.getElementsByClassName(selector)[0].className = `${classes} ${value}`;
}

var setAttr = function(selector, attr, value) {
    document.getElementsByClassName(selector)[0].setAttribute(attr, value);
}