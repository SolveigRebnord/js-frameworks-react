import React, {useState} from 'react';



function AnotherState() { 

    const [fruit, setFruit] = useState('banana'); 


    return (
            <div className="container">
                <span>{fruit}</span>
                <button onClick={() => {
                    setFruit('grape');
                    console.log(fruit)
                }
                    }>Frukt</button>
            </div>
    )
}







export default AnotherState;