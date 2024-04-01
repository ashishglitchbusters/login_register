import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Login from './Login';
import Register from './Register';
import UserDetails from './UserDetails';
import 'bootstrap/dist/css/bootstrap.css';
import Reset from './Reset';
import Forgot from './ForgotPass';



function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <UserDetails></UserDetails> */}
      {/* <Reset></Reset> */}
     
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/userdetails' element={<UserDetails/>}></Route>
        <Route path='/reset'element={<Reset/>} ></Route>
        <Route path='/forgot' element={<Forgot/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;