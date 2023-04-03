import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import LogIn from './components/signin';
import Signup from './components/signup';
import Aboutus from './components/Aboutus/AboutUs';
import LandingFinal from './components/LandingPage/LandingPageFinal'
import {Routes, Route} from 'react-router-dom'
import Panel from './components/CRM/Panel/Panel';
import VerificationPage from './components/VerificationPage/VerificationPage';

function App() {
  return(
    <Routes>
      <Route path='/' element={<LandingFinal />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/verificationPage' element={<VerificationPage />} />
      <Route path='aboutus' element={<Aboutus />} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/userpanel' element={<Panel/>}/>
		 </Routes> 

  )
}

export default App;
