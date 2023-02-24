import React, {useState} from 'react';
import TotalVotes from './TotalVotes'

  

function Voting(props) { 

    const [count, setCount] = useState(0); 


    return (
            <div className="container">
                <p>{props.name}</p>
                <button onClick={() => setCount(count + 1)}>+</button>
                <span>{count}</span>
                <div>
                <TotalVotes name={props.name} amountVotes={count} />
                </div>
            </div>
    )
}




export default Voting;