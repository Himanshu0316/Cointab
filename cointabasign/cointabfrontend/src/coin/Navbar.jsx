import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Main.module.css'
function Navbar() {
 
  const navigate = useNavigate();
    return (
      <div className={styles.Navbar}>
        <div>
        <NavLink className={styles.navLinks} to={"/"}>Cointab</NavLink>
        </div>   
      </div>
  
    );
  }
  
  export default Navbar;