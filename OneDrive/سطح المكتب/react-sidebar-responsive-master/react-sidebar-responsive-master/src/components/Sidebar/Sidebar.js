import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
  const [show, setShow] = useState(true);

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-chevron-left' : null}`}></i> <i class=""></i>
        </div>

        <h1>heheh</h1>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <div className='myFlex'>
              <Link to='/' className={`${show ? 'nav-logo-show' : 'nav-logo'}`}>
                <i className={`fas fa-home-alt nav-logo-icon`}></i>
                <span className='nav-logo-name'>LOGO</span>
              </Link>
              <button className='close-btn' onClick={() => setShow(false)} >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className='nav-list'>
              <p className='menu-word' 
                
                style={{
                  textAlign: !show ? 'center' : 'left',
                  padding: !show ? '0' : '0.5rem 0 0.5rem 1.5rem',
                }}
              >MENU</p>
              <Link to='/dashboard' className='nav-link active'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Cars</span>
              </Link>
              <Link to='/hotel' className='nav-link'>
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className='nav-link-name'>Add Car</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <i className='fas fa-image nav-link-icon'></i>
                <span className='nav-link-name'>Dealers</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <i className='fas fa-dollar-sign nav-link-icon'></i>
                <span className='nav-link-name'>Add Dealer</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <i className='fas fa-dollar-sign nav-link-icon'></i>
                <span className='nav-link-name'>\Inspectores</span>
              </Link>
              <Link to='/gallery' className='nav-link'>
                <i className='fas fa-dollar-sign nav-link-icon'></i>
                <span className='nav-link-name'>Add Inspectore</span>
              </Link>
            </div>
          </div>

          <Link to='/logout' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>

      <h1>{props.children}</h1>
    </main>
  );
};

export default Sidebar;
