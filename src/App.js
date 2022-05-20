import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';





function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ swith, setSwitch] = useState(false)

  useEffect(() => {
    const storedUserLoggedIn = localStorage.getItem('isLoggedIn');

    if(storedUserLoggedIn === '1') {
      setIsLoggedIn(true)
    }
  },[])

  const loginHandler =  (email, password) => {
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      
      <AuthContext.Provider value={{onSwithc: isLoggedIn,setSwitch:setSwitch}}>
      <MainHeader onLogout={logoutHandler} />
      <main style={{background:!swith  ? 'white' : 'black',padding:'200px'}}>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>

   
    </React.Fragment>
  );
}

export default App;
