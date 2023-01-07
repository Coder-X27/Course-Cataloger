import React from 'react';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
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
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
