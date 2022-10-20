import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllTest } from './redux/actions/index.js';
import LandingPage from './view/landingpage/LandingPage.jsx'
import Home from './view/home/Home.jsx'
import Nav from './view/nav/Nav.jsx';
import './App.css'

function App() {
  const Tests = useSelector((state) => state.Tests);
  const location = useLocation();
  const dispatch = useDispatch();


  if (Tests.length === 0) {
    console.log('VOY A EJECUITAR EL GET ALL')
    dispatch(getAllTest())
  }
  if (Tests.length > 1) {
    console.log('VOY A GUARDAR EL GET ALL')
    localStorage.setItem('tests', Tests)
  }
  return (
    <div className="App">
      <Nav></Nav>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
