const utilities = {
    setElement(selector, value) {
        document.getElementsByClassName(selector)[0].innerHTML = value;
    },
    removeClass(selector, value) {
        var classes = document.getElementsByClassName(selector)[0].className;
        document.getElementsByClassName(selector)[0].className = classes.replace(value, '');
    },
    addClass(selector, value) {
        var classes = document.getElementsByClassName(selector)[0].className;
        document.getElementsByClassName(selector)[0].className = `${classes} ${value}`;
    },
    setAttr(selector, attr, value) {
        document.getElementsByClassName(selector)[0].setAttribute(attr, value);
    }
}

export default utilities;