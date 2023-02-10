import React from 'react';
import Navbar from './Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import styles from './Main.module.css'
import User from './User';
import Adduser from './AddUser';
import EditUser from './EditUser';
import Detels from './Detels';
function Main() {
 
    return (
      <div className={styles.Main}>
       
         <Navbar/>
         <Routes>
        
            
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<User/>} />
        <Route path='/adduser' element={<Adduser/>} />
        <Route path='/Edituser/:id' element={<EditUser/>} />
        <Route path='/view/:id' element={<Detels/>} />
    </Routes>
      </div>
  
    );
  }
  
  export default Main;