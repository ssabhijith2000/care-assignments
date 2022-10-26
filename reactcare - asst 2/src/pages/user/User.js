import { useEffect, useState } from "react";
import { getUsers } from '../../service/users'
import NavBar from '../../components/navbar/Navbar'
import { TextField, Stack} from '@mui/material';
import UserData from "../userData/userData";


function User () {
    const [users, setUsers] = useState([]);
    const [noOfUsers, setNoOfUsers] = useState(5)
    const getUsersList = async () => {
        const users = await getUsers(noOfUsers);
        setUsers(users);
    }

    useEffect(() => {
        getUsersList();
    },[noOfUsers])


    return(
        <>
            
            <NavBar />
            <br />
            <TextField value={noOfUsers} onChange={(e) => setNoOfUsers(e.target.value)} label="Number of users" variant="outlined" />
            <br />
            <h1>Users</h1>
            <UserData users={users}/> 
        </>
    );
}

export default User;