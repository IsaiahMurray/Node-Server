import React, { useState, useEffect } from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import Display from './components/Display';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const [sessionToken, setSessionToken] = useState(''); 

  useEffect(() => { 
    if(localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => { 
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('')
  }

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <Display token={sessionToken}/>
    : <Auth updateToken={updateToken}/>)
  }
  return (
    <div className="App">
     <Nav clickLogout={clearToken}/>
     {protectedViews()}
     <Footer />
    </div>
  );
}

export default App;
