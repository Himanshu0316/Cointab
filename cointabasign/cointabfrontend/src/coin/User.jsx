
import React from 'react';
import { useState } from 'react';
import styles from "./Main.module.css";
import Userlogin from './Userlogin';
import Usersignup from './Usersignup';

function User() {
     const [show,setShow] = useState(true)
    return (
      
        
         <div  className={styles.loginBox}>
            <div className={styles.loginButton} >
                <button className={show?styles.btn1 : styles.btn2}  onClick={() => setShow(true)}>Login</button>
                <button className={show?styles.btn2 : styles.btn1}  onClick={() => setShow(false)}>Register</button>
            </div>
            <div className={styles.logDivs}>
                {show?<Userlogin/>:<Usersignup/>}
            </div>
         </div>
         
  
    );
  }
  
  export default User;