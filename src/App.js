import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage';
import SongPage from './pages/song';
import AboutPage from './pages/aboutpage';
import NavBar from './Components/NavBar';


function App() {
  const NavBarLinks = [
    {label: "MusicNU", addr: "/"},
    {label: "Home", addr: "/"},
    {label: "Music", addr: "/song"},
    {label: "About", addr: "/about"}
  ]
    //<NavBar links={NavBarLinks}/> insert this
  return (
        <Router>
          <NavBar links={NavBarLinks}/>
          <Routes>
            <Route path='/'  element={<HomePage />} />
            <Route path='/'  element={<HomePage />} />
            <Route path='/song'  element={<SongPage />} />
            <Route path='/about'  element={<AboutPage />} />
          </Routes>
        </Router>
          
  );
}

export default App;
