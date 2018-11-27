"use strict";

var toggleApp = {
    title: "Visibility Toggle",
    details: "Hey! These are some details you can now see!",
    buttonText: ['Show Details', 'Hide Details']
};

var buttonText = toggleApp.buttonText[0];

var toggleInfo = function toggleInfo() {
    var buttonText = toggleApp.buttonText[1];
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            toggleApp.title
        ),
        React.createElement(
            "button",
            { onClick: toggleInfo },
            buttonText
        ),
        React.createElement(
            "p",
            null,
            toggleApp.details
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
