import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage';
import AboutUs from './pages/about';
import NavBar from './Components/NavBar';

function App() {
  const NavBarLinks = [
    {label: "Home", addr: "/"},
    {label: "About", addr: "/AboutUs"}]
    //<NavBar links={NavBarLinks}/> insert this
  return (
        <Router>
          <NavBar links={NavBarLinks}/>
          <Routes>
            <Route path='/'  element={<HomePage />} />
            <Route path='/AboutUs'  element={<AboutUs />} />
          </Routes>
        </Router>
          
  );
}

export default App;
