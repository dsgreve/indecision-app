'use strict';

var toggleApp = {
    title: "Visibility Toggle",
    details: [],
    buttonText: ['Show Details', 'Hide Details']
};
var myButtonText = toggleApp.buttonText[0];

var toggleInfo = function toggleInfo() {
    if (toggleApp.details == '') {
        toggleApp.details = ["Hey! These are some details you can now see!"];
        myButtonText = toggleApp.buttonText[1];
    } else {
        toggleApp.details = [];
        myButtonText = toggleApp.buttonText[0];
    }
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            toggleApp.title
        ),
        React.createElement(
            'button',
            { onClick: toggleInfo },
            myButtonText
        ),
        React.createElement(
            'p',
            null,
            toggleApp.details
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
