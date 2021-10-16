import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Shop from './components/Shop';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Shop/> 
    </Router>
    </>
  )
}

export default App;
