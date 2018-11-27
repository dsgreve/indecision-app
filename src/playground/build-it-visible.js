const toggleApp = {
    title: "Visibility Toggle",
    details: "Hey! These are some details you can now see!",
    buttonText: ['Show Details', 'Hide Details']
}




let buttonText = toggleApp.buttonText[0];

const toggleInfo = () => {
    let buttonText = toggleApp.buttonText[1];
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{toggleApp.title}</h1>
            <button onClick={toggleInfo}>{buttonText}</button>
            <p>{toggleApp.details}</p>
        </div>
    )
    ReactDOM.render(template, appRoot);
};

render();


