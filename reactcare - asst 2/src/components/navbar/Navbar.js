import { Link} from 'react-router-dom'

function Navbar () {

    return(
        <nav>
            <Link to={"/home"}>Home</Link>
            <br />
            <Link to={"/user"}>User</Link>
            <br />
            <Link to={"/user/sharath"}>User Details</Link>
        </nav>
    );
}

export default Navbar;