import axios from 'axios';

const getUsers = async (value) => {
        const users = await axios.get(`https://randomuser.me/api/?page=1&results=${value}`);
        const usersList = [];

        for(let user of users.data.results) {
            usersList.push({
                name: `${user.name.first} ${user.name.first}`, 
                email: user.email,
                phone: user.phone,
                profile: user.picture.thumbnail
            })
        }
        return usersList;
    }


export { getUsers }