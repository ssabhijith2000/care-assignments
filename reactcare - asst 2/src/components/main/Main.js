import './Main.css'
import { useState } from 'react';

function Main (props) {

    const [count, setCount ] = useState(0);

    const title = props.title;

    const decrement = () => {
        console.log('decrement is clicked');
        setCount(count - 1);
        console.log('counter value : ', count);
    }

    const increment = () => {
        console.log('increment is clicked');
        setCount(count + 1);
        console.log('counter value : ', count);
    }

    return (
        <div className="container">
            <div> 
                <span> {title} </span>
                <button onClick={decrement} className="btn-react">Decrement </button>
                {count}
                <button onClick={increment} className="btn-react"> Increment</button>
            </div>
        </div>
    );
}

export default Main;