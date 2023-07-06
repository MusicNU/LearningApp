import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage';
import Search from './pages/search';
import Song from './pages/song';
import AboutPage from './pages/aboutpage';
import NavBar from './Components/NavBar';
import Vis from './pages/musicvis';
import RhythmPage from './pages/rhythm';


function App() {
  const NavBarLinks = [
    {label: "Home", addr: "/"},
    {label: "Search", addr: "/search"},
    {label: "Music", addr: "/song"},
    {label: "About", addr: "/about"}
  ]
  
    //<NavBar links={NavBarLinks}/> insert this
  return (
        <Router>
          <NavBar links={NavBarLinks}/>
          <Routes>
            <Route path='/'  element={<HomePage />} />
            <Route path='/search'  element={<Search />} />
            <Route path='/song'  element={<Song />} />
            <Route path='/about'  element={<AboutPage />} />
            <Route path='/musicvis'  element={<Vis />} />
            <Route path='/song/rhythm'  element={<RhythmPage />} />
          </Routes>
        </Router>
          
  );
}

export default App;
