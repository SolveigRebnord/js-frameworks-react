import React, {useState} from 'react';




//komponenten vår
function TryState() { 

    const [count, setCount] = useState(0); 
    // dette er construction av the useState hook
    // count er value
    // setCount er funksjon som updater value
    // useState er den som returner uansett. 10 er nå default/start

    /*onClick={handleIncrement}

    function handleIncrement () {
        console.log("You clicked +");
        setCount (count + 1)
    }*/

    /* onClick={handleDecrease}
    function handleDecrease () {
        setCount (count - 1)
    }*/

    return (
            <div className="container">
                <button onClick={() => setCount(count + 1)}>+</button>
                <span>{count}</span>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
    )
    //  <button onClick={() => this.setState({ count: this.state.count + 1 })}>
    // dette er fra react. Istedenfor å måtte presisere this.state med setState(), så har vi variabelen count
}





export default TryState;