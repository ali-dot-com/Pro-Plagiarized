import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import LogIn from './components/signin';
import Signup from './components/signup';
import Aboutus from './components/Aboutus/AboutUs';
import LandingFinal from './components/LandingPage/LandingPageFinal'
import {Routes, Route} from 'react-router-dom'
import TestiMonials from './components/TestiMonials/TestiMonials'
import SidePanel from './components/CRM/SidePanel/SidePanel';

function App() {
  return(
    // <LogIn/>
     //<Signup />
    // <Aboutus/>
    // <Landing/>
    //<LandingFinal/>
    <SidePanel/>
    // <Routes>
		// <Route path='/' element={<LandingFinal />} />
		// <Route path='aboutus' element={<Aboutus />} />
    // <Route path='/signup' element={<Signup/>}/>
    // <Route path='/temp' element={<TestiMonials/>}/>
		// </Routes> 

  )
}

export default App;
