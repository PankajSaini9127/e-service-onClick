
import './App.css';
import Home from './Components/Home';

import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Request from './Components/Request';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useState } from 'react';
import Main from './Components/Main';

function App() {



  const [flag, setFlag] = useState(false)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/login' exact element={<Login setFlag={setFlag}/>} />
        <Route path='/signup' exact element={<SignUp/>} />
        <Route path='/home' element={flag?<Main flag={flag} setFlag={setFlag} />:<Login setFlag={setFlag}/>} />
      </Routes>
    </BrowserRouter>
    {/* <Login/> */}
    {/* <SignUp/> */}
    {/* <Home/>
    <Request/>
    <Services/>
    <Contact/> */}
    </>
  );
}

export default App;
