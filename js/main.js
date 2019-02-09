var initializePage = function() {
    var url = 'https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather';

    // load the weather, then update the page with the returned information
    fetch(url).then(function(response) {
        return response.json();
    }).then(function(data) {
        updateWeatherInfo(data);
    }).catch(function(ex) {
        console.log("hit exception: ", ex);
    });

    document.getElementById('submit').addEventListener('click', handleSignup);
}

var handleSignup = function(data) {
    ga('send', 'event', 'Button', 'Clicked', 'Landing Page Signup', 0);
}

var updateWeatherInfo = function(data) {
    setElement('js-location', `${data.today.city}, ${data.today.state}`);
    setElement('js-temperature', `${Math.round(data.today.temperature)}&deg;`);
    setElement('js-temperatureHigh', `High: ${Math.round(data.today.highTemperature)}&deg;`);
    setElement('js-temperatureLow', `Low: ${Math.round(data.today.lowTemperature)}&deg;`);
    setElement('js-description', data.today.description);

    removeClass('js-weatherInfo', 'hidden');
    addClass('js-loading', 'hidden');
    
    setAttr('js-weatherIcon', 'src', data.today.iconLink);
}

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

initializePage();