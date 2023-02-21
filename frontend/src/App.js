import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import LogIn from './components/signin';
import Signup from './components/signup';
import Aboutus from './components/AboutUs';
import LandingFinal from './components/LandingPageFinal'
import {Routes, Route} from 'react-router-dom'
function App() {
  return(
    // <LogIn/>
     //<Signup />
    // <Aboutus/>
    // <Landing/>
    //<LandingFinal/>
    <Routes>
		<Route path='/' element={<LandingFinal />} />
		<Route path='about' element={<Aboutus />} />
		</Routes> 
  )
}

export default App;
