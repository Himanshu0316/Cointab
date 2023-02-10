import React, { useEffect } from 'react'
import { useState } from 'react'
import {useParams,useNavigate} from "react-router-dom";
import styles from "./Main.module.css"

import axios from "axios";

const EditUser = () => {
const navigate = useNavigate()
const [data, setData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});
const handleChange = ({ currentTarget: input }) => {
  setData({ ...data, [input.name]: input.value });
};
  const {id} = useParams("");
  console.log(id)


const updateUser = async(e)=>{
      e.preventDefault();
      const {firstName,lastName,email,password} = data;
      const res2 = await fetch(`http://localhost:8080/updateuser/${id}`,{
        method:"PUT",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({
          firstName,lastName,email,password
        })
      })
      const data2 = await res2.json();
      console.log(data2);
      if(res2.status === 404 || !data2){
          alert("fill the data")
      }else{
        alert("data added")
        navigate("/")
        
      }
}
  
  return (
    <div className={styles.logDiv}>
      <form onSubmit={updateUser} className={styles.formDivs}>
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

export default EditUser;