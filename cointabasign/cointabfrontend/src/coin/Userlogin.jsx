import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router";
import styles from './Main.module.css'
function Userlogin() {

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [count,setCount] = useState(0)
  
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const url = "http://localhost:8080/api/auth";
      const res = await axios.post(url, data);

     var token = res.data.data;
      var user = res.data.id;
      localStorage.setItem("token", token);
      localStorage.setItem("userid", user);
      console.log(res);
      if(res.data.message=="Invalid Password"){
        if(count==5){
          alert("your account blocked for 24 hours")
        }else{
          setCount(count+1)
          alert(count)
        }
      }
      alert(res.data.message);
       navigate("/")
     

      console.log(res.message);
    } catch (err) {
      console.log(err);
      if(count==5){
        alert("your account blocked for 24 hours")
      }else{
        setCount(count+1)
        alert(count)
      }
      
    }
  };
  return (

    <div className={styles.logDiv}>

      <form className={styles.formDivs} onSubmit={handleSubmit}>

        
        <input className={styles.inPuts} type="email" name='email' placeholder='Email' value={data.email} required onChange={handleChange} />
        <input className={styles.inPuts}  type="password" name='password' placeholder='Password' value={data.password} required onChange={handleChange} />

        <input className={styles.inPuts} type="submit" value='submit' />

      </form>
    </div>

  )

}

export default Userlogin;