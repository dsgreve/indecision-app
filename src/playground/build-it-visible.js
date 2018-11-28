const toggleApp = {
    title: "Visibility Toggle",
    details: [],
    buttonText: ['Show Details', 'Hide Details']
}
let myButtonText = toggleApp.buttonText[0];

const toggleInfo = () => {
    if (toggleApp.details == '') {
        toggleApp.details = ["Hey! These are some details you can now see!"];
        myButtonText = toggleApp.buttonText[1];
    } else {
        toggleApp.details = [];
        myButtonText = toggleApp.buttonText[0];
    }
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{toggleApp.title}</h1>
            <button onClick={toggleInfo}>{myButtonText}</button>
            <p>{toggleApp.details}</p>
        </div>
    )
    ReactDOM.render(template, appRoot);
};

render();


