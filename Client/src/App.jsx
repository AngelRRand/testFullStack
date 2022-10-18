import { Routes, Route } from "react-router-dom";
import LandingPage from './view/landingpage/LandingPage.jsx'
import Home from './view/home/Home.jsx'
import './App.css'

function App() {
  

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
