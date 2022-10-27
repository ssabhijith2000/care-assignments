import NavBar from '../../components/navbar/Navbar'
import { Link} from 'react-router-dom'

function Home (props) {
    return(
        <>
        <NavBar />
        <Link to={"/login"}>Login</Link>
        <h1>In Home Component</h1>
        </>
    );
}

export default Home;