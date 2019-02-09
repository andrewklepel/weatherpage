// validate the form on the landing page

var validateForm = function() {
    var zip = document.getElementById('zip').value;
    var agreement = document.getElementById('agreement').checked;

    hideValidationError('js-zipValidation');
    hideValidationError('js-agreementValidation');

    // validate that zip code is valid
    if (!/(^\d{5}$)/.test(zip)) {
        displayValidationError('js-zipValidation');
        return false;
    // validate that agreement is checked
    } else if (!agreement) {
        displayValidationError('js-agreementValidation');
        return false;
    } else {
        return true;
    };
}
    
var displayValidationError = function(id) {
    removeClass(id, 'hidden');
}

var hideValidationError = function(id) {
    classes = document.getElementsByClassName(id)[0].className;
    if (!classes.includes('hidden')) {
        addClass(id, 'hidden');
    }
}