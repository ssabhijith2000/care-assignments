import { useEffect, useState } from "react";
import Children from '../../components/children/Children';


function Parent () {
    const [name, setName] = useState('');

    const onChangeName = (value) => {
        setName(value);
    }

    return(
        <div> 
            Parent Component : { name} 
            <Children name={name} onNameChange={onChangeName} />      
        </div>
    );
}

export default Parent;