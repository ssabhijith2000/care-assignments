import { useEffect, useState }  from "react"

function UseEffectComp (props) {
    const [name, setName]  = useState('Sharath');
    const [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            if(name === 'Sharath') {
                setToggle(true);
            }
            setName("Changed name");
        }, 5000);

        // return false;
    },[])

    useEffect(() => {
        if(toggle) {
            setTimeout(() => {
                setName("Changed name second time") 
            }, 5000);
        }
    },[toggle])
    



    return(
        <div> 
            {name}
        </div>
    );
}

export default UseEffectComp;