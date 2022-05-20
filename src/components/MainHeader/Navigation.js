import React from 'react';
import { useContext } from 'react';

import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  const contextData = useContext(AuthContext)


  return (
    <nav className={classes.nav}>
      <ul>
        {contextData.onSwithc && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {contextData.onSwithc && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        

        {contextData.onSwithc && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );

}




export default Navigation;
