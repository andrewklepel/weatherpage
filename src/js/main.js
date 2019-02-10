// Using 100% pure JS - since the scope of this landing page is small,
// it wouldn't make sense to pollute it with any large libraries

// If it did get expanded in the future, it would be great to use a
// library like handlebars, knockout, angular, etc. to bind data from
// the API onto the page

import utilities from './utility.js';
import validate from './validation.js';

var initializePage = function() {
    var url = 'https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather';

    // load the weather, then update the page with the returned information
    fetch(url).then(function(response) {
        return response.json();
    }).then(function(data) {
        updateWeatherInfo(data);
    }).catch(function(ex) {
        console.log('hit exception: ', ex);
    });

    document.getElementById('submit').addEventListener('click', handleSignup);
};

// bind data to the page after API call has completed
var updateWeatherInfo = function(data) {
    utilities.setElement('js-location', `${data.today.city}, ${data.today.state}`);
    utilities.setElement('js-temperature', `${Math.round(data.today.temperature)}&deg;`);
    utilities.setElement('js-temperatureHigh', `High: ${Math.round(data.today.highTemperature)}&deg;`);
    utilities.setElement('js-temperatureLow', `Low: ${Math.round(data.today.lowTemperature)}&deg;`);
    utilities.setElement('js-description', data.today.description);

    utilities.removeClass('js-weatherInfo', 'visuallyHidden');
    utilities.addClass('js-loading', 'visuallyHidden');
    
    utilities.setAttr('js-weatherIcon', 'src', data.today.iconLink);
};

// validate form, and track signup events via Google Analytics
var handleSignup = function(event) {
    // stop form POST event from happening
    event.preventDefault();

    var valid = validate();

    if (valid) {
        ga('send', 'event', 'Button', 'Clicked', 'Landing Page Signup', 0);

        // simulate navigating to another page, although further pages are outside the scope of this demo
        location.reload();
    }
};

initializePage();