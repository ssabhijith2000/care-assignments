import { useParams, useNavigate, Link, useLocation, useSearchParams } from 'react-router-dom'

function UserDetails (props) {
    const params = useParams();
    const [searchParams] = useSearchParams()
    const navigate = useNavigate();
    const location = useLocation();
    
    console.log('params', params);
    console.log('searchParams', searchParams)
    console.log('location', location);
    const redirectToHome = () => {
        // OTHER FUNCTIONALITY
        navigate('/home');
    } 
    
    return(
        <>
            <h1>In User Details Component : {params.userId} </h1>
            <button onClick={redirectToHome} >Redirect to Home</button>
            <Link to={"/home"}> Home </Link>
        </>
    );
}

export default UserDetails;