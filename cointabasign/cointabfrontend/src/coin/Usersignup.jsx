
import React from 'react';
import axios from "axios";
import { useState } from 'react';
import styles from './Main.module.css'
import { useNavigate } from 'react-router-dom';
function Usersignup() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  
  
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const res = await axios.post(url, data);
      
      console.log(res);
    } catch (err) {
      alert(err.response.data.message);
      console.log(err);
      
    }
  };
  return (
    <div className={styles.logDiv}>
      <form onSubmit={handleSubmit} className={styles.formDivs}>
        <input
          className={styles.inPuts}
          type="text"
          name="firstName"
          placeholder='First Name'
          onChange={handleChange}
          value={data.firstName}
          required
        />
        <input
          className={styles.inPuts}
          type="text"
          name="lastName"
          placeholder='Last Name'
          onChange={handleChange}
          value={data.lastName}
          required
        />
        <input
          className={styles.inPuts}
          type="email"
          name='email'
          placeholder='Email'
          value={data.email}
          required
          onChange={handleChange}
        />
        <input
          className={styles.inPuts}
          type="password" name='password'
          placeholder='Password'
          value={data.password}
          required
          onChange={handleChange}
        />
        <p>use 1 caps. 1 small letter and 1 number and 1 spacial char ex:-123@Abc</p>

        <input className={styles.inPuts} type="submit" value='submit' />

      </form>
    </div>

  );
}

export default Usersignup;