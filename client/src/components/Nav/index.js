import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/Logo2.png';
import './styles.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function Nav() {

  const logout = event => {
    event.preventDefault();

    Auth.logout();
  };
  
  return (
    <div className="Nav">
      <div className="jumbotron">
        <div className="jumbotronInner">
          <div>
            <img className="logo" src={logo} width="150" alt="volleyball"></img>
          </div>
          <div className="nav-p">
            <p>League Dates - March 21-27 Week 1 to May 8-15 Week 8</p>
           <p>CTX Feildhouse Buda Tx Sand Volleyball Courts</p>
          </div>
        </div>
      </div>
      <div className="linkContainer">
        <div className="navlinks">
          {/* <Link to={'/'}><a href='/'>Home</a></Link> */}
          {Auth.loggedIn() ? (
            <>
            <Link to={'/rules'}>Rules</Link>
            <a href='/' onClick={logout}>
              Logout
            </a>
            </>
          ) : (
            <>
              <Link to={'/'}><ul><li><a href='/'>Home</a></li></ul></Link>
              <Link to={'/rules'}><ul><li><a href='/rules'>Rules</a></li></ul></Link>
              <Link to={'/leagues'}><ul><li><a href='/leagues'>Leagues</a></li></ul></Link>
              <Link to={'/tournament'}><ul><li><a href='/tournament'>Tournament</a></li></ul></Link>
              <Link to={'/contact'}><ul><li><a href='/contact'>Contact</a></li></ul></Link>
              <Link to={'/login'}><ul><li><a href='/login'>Login</a></li></ul></Link>
              <Link to={'/signup'}><ul><li><a href='/signup'>Signup</a></li></ul></Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
