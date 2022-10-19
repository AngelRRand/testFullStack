import { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllTest } from './redux/actions/index.js'; 
import LandingPage from './view/landingpage/LandingPage.jsx'
import Home from './view/home/Home.jsx'
import './App.css'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTest())
    
  }, [dispatch])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
