import { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllTest } from './redux/actions/index.js'; 
import LandingPage from './view/landingpage/LandingPage.jsx'
import Home from './view/home/Home.jsx'
import './App.css'
import Nav from './view/nav/Nav.jsx';

function App() {
  const Tests = useSelector((state) => state.Tests);
  const dispatch = useDispatch();


  if(Tests.length === 0){
    console.log('VOY A EJECUITAR EL GET ALL')
      dispatch(getAllTest())
  }
  if(Tests.length > 1){
    console.log('VOY A GUARDAR EL GET ALL')
    localStorage.setItem('tests', Tests)
  }
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
