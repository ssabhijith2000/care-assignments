import './Header.css';

function Header (props) {

    const user = props.user.name;

    return(
        <div> 
            User Name <span className="user-name"> {user} </span> |
            Role <span className="user-name"> {props.user.role} </span>
        </div>
    );
}

export default Header;