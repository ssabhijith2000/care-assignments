import { useState } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Main from '../main/Main';
import { Button } from '@mui/material';
import './Layout.css';
import SigninForm from '../signinForm/SigninForm';


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

    return(
        <>
        <br/>
            <Header user={user}></Header>
            <br/>
            <div>
                <Button variant="outlined" className='customm-button' onClick={toggleRender} > Show signin form </Button>
                
            </div>
            <br/>
            {
               showFlag && <SigninForm/>
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