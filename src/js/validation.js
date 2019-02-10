import utilities from './utility.js';

// validate the form on the landing page
export default function() {
    var zip = document.getElementById('zip').value;
    var agreement = document.getElementById('agreement').checked;

    hideValidationError('js-zipValidation');
    hideValidationError('js-agreementValidation');

    // validate that zip code is valid
    if (!/(^\d{5}$)/.test(zip)) {
        showValidationError('js-zipValidation');
        return false;
    // validate that agreement is checked
    } else if (!agreement) {
        showValidationError('js-agreementValidation');
        return false;
    } else {
        return true;
    };
}
    
var showValidationError = function(id) {
    utilities.removeClass(id, 'hidden');
}

var hideValidationError = function(id) {
    var classes = document.getElementsByClassName(id)[0].className;
    if (!classes.includes('hidden')) {
        utilities.addClass(id, 'hidden');
    }
}