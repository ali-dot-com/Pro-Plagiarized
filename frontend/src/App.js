import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import LogIn from './components/Signin/signin';
import Signup from './components/Signup/signup';
import Aboutus from './components/Aboutus/AboutUs';
import LandingFinal from './components/LandingPage/LandingPageFinal'
import {Routes, Route} from 'react-router-dom'

import Panel from './components/CRM/Panel/Panel';

import VerificationPage from './components/VerificationPage/VerificationPage';
import Panel from './components/CRM/Panel/Panel';
import VerificationPage from './components/VerificationPage/VerificationPage';
import AdminMain from './components/AdminCRM/AdminMain/AdminMain';
import Guarantees from './components/Guarantees/Guarantee';

function App() {
  return(
    <Routes>
      <Route path='/'                 element={<LandingFinal />} />
      <Route path='/login'            element={<LogIn />} />
      <Route path='/verificationPage' element={<VerificationPage />} />
      <Route path='aboutus'           element={<Aboutus />} />
      <Route path='/signup'           element={<Signup/>}/>
      <Route path='/userpanel'        element={<Panel/>}/>
      <Route path='/adminPanel'       element={<AdminMain/>}/>
      <Route path='/guarantee'        element={<Guarantees/>}/>
		</Routes> 

  )
}

export default App;
