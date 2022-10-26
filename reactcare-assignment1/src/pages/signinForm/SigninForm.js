import React, { useState} from 'react';
import DisplayCard from '../displayCard/displayCard'
import { TextField, Button, Grid } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Stack from '@mui/material/Stack';
function SigninForm () {
    const [showDetailsFlag,setShowDetailsFlag] = useState(false)
    const [firstNameInput, setFirstNameInput] = useState('')
    const [lastNameInput, setLastNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const fieldsMandatoryToast = () => toast.error("All fields are mandatory");
    function submit(){
        if(firstNameInput !=='' && lastNameInput !=='' && emailInput!=='')
        {
            setShowDetailsFlag(true)
            setFirstName(firstNameInput)
            setLastName(lastNameInput)
            setEmail(emailInput)           
    }
    else {
        fieldsMandatoryToast()
    }
}

    function reset(){
        setShowDetailsFlag(false)    
        setFirstName('')
        setLastName('')
        setEmail('')
        setFirstNameInput('')
        setLastNameInput('')
        setEmailInput('')
    }
    return (
        <div className='form'>
                <ToastContainer
position="top-right"
autoClose={1000}
hideProgressBar={true}
newestOnTop={true}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
<Stack direction="column" spacing={2}>
<Grid container justifyContent="center">
<Stack direction= "row" spacing={1}><TextField value={firstNameInput} 
			onChange={(e) => setFirstNameInput(e.target.value)} label="First Name" variant="outlined" />
                <TextField value={lastNameInput} 
			onChange={(e) => setLastNameInput(e.target.value)} label="Last Name" variant="outlined" />
                <TextField value={emailInput} 
			onChange={(e) => setEmailInput(e.target.value)} label="email" variant="outlined" /><br/><br/>
                </Stack>
                </Grid>
                <Grid container justifyContent="center">
                <Stack direction= "row" spacing={1}> 
                <Button variant = "contained" onClick={submit} >Submit</Button>
                <Button variant = "contained" onClick={reset}>Reset</Button>
                </Stack>
                </Grid>
                <Grid container justifyContent="center">
                {showDetailsFlag && 
                <DisplayCard name={firstName+" "+lastName} email={email}/> 
                }
                </Grid>
                </Stack>
                
        </div>
    )
}

export default SigninForm;