import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage';
import SongPage from './pages/song';
import NavBar from './Components/NavBar';


function App() {
  const NavBarLinks = [
    {label: "Home", addr: "/"},
    {label: "Music", addr: "/song"}]
    //<NavBar links={NavBarLinks}/> insert this
  return (
        <Router>
          <NavBar links={NavBarLinks}/>
          <Routes>
            <Route path='/'  element={<HomePage />} />
            <Route path='/song'  element={<SongPage />} />
           
          </Routes>
        </Router>
          
  );
}

export default App;
