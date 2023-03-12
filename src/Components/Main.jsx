import React from 'react'
import Contact from './Contact'
import Home from './Home'
import Request from './Request'
import Services from './Services'

function Main({flag,setFlag}) {
  return (
    <>
    <Home flag={flag} setFlag={setFlag}/>
    <Services/>
    <Request/>
    <Contact/>
    </>
  )
}

export default Main