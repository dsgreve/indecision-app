const toggleApp = {
    title: "Visibility Toggle",
}

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility; //this toggles boolean
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{toggleApp.title}</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            { /* test if visibilty is true*/}
            {visibility && (
                <div>
                    <p>Hey. These are some details you can now see.</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(template, appRoot);
};

render();