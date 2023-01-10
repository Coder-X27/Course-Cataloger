import React from 'react';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import ForgetPassword from './Components/Auth/ForgetPassword';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import ResetPassword from './Components/Auth/ResetPassword';
import Courses from './Components/Courses/Courses';
import Home from './Components/Home/Home';
import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/forget' element={<ForgetPassword/>} />
        <Route path='/resetpassword/:token' element={<ResetPassword/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
