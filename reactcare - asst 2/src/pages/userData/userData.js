function UserData(props) {
    return ( <>
    {
                props.users.map((user) => 
                    <>
                        <img src={user.profile} alt="profile" />
                        <h1>{user.name}</h1>
                        <div>
                            email : {user.email}
                            <br />
                            phone : {user.phone}
                        </div>
                    </>
                )
            }</> );
}

export default UserData;