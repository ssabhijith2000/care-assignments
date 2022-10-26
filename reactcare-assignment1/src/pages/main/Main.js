import './Main.css'
import { useState } from 'react';
import { Button } from '@mui/material';
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
                <Button onClick={decrement} className="btn-react">Decrement </Button>
                {count}
                <Button onClick={increment} className="btn-react"> Increment</Button>
            </div>
        </div>
    );
}

export default Main;