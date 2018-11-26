//let is used because var count will change
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
    console.log('addOne', count)
};

const minusOne = () => {
    count--;
    renderCounterApp();
    console.log('minusOne', count)
};

const resetCount = () => {
    count = 0;
    renderCounterApp();
    console.log('resetCount', count)
}
//css class is renamed to className in JSX because class is a js reserved word


//Make button minus One and register
//Make button reset "rest" fire setup reset.



const appTemp = document.getElementById('app');


ReactDOM.render(template, appTemp);

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>&nbsp;
    <button onClick={minusOne}>-1</button>&nbsp;
    <button onClick={resetCount}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);

};

renderCounterApp();
