import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import { TextField } from '@mui/material';
import './Layout.css';

function Layout () {

    const user = {
        name: 'ABC',
        role: 'admin',
        userType: 'internal'
    }

    const counterTypes = ['Goals', 'Runs', 'Overs', 'Panelties', 'Wickets', 'Won', 'Loss'];

    const [showFlag, setShowFlag] = useState(false); 

    function toggleRender() {
        setShowFlag(!showFlag);
        console.log('flag value : ', showFlag);
    }

    function submitForm() {
        // import button from material UI
        // show in ui the inputs from FORM
            // create a component
            // send the values to another component using props
            // render the value in that component
        
    }

    return(
        <>
            <Header user={user}></Header>

            <div>
                <button onClick={toggleRender} > Show signin form </button>
            </div>

            {
               showFlag && 
               
               <div className='form'>
                    <TextField id="name" label="First Name" variant="outlined" />
                    <TextField id="name" label="Last Name" variant="outlined" />
                    <TextField id="name" label="email" variant="outlined" />
                    <button onClick={submitForm}>Submit</button>
               </div>
            }

            { 
                counterTypes.map((type, index) => {
                    return(<Main title={type} key={index} ></Main>)
                })
            }

            <Footer></Footer>
        </>
        
    );
}

export default Layout;