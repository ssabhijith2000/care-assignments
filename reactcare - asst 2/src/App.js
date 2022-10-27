import './App.css';
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom'
import Layout from './pages/Layout/Layout';
import Parent from './pages/parent/Parent';
import UseEffectComp from './pages/useEffectComp/UseEffectComp';
import Home from './pages/home/Home'
import User from './pages/user/User'
import NotFound from './pages/NotFound'
import UserDetails from './pages/userDetails/UserDetails';
import SignIn from './pages/signin/Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<SignIn/>}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:userId" element={<UserDetails />} /> 
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
        {/* <Layout/> */}
        {/* <UseEffectComp name={"abc"} /> */}
        {/* <Parent /> */}
    </div>
  );
}

export default App;
