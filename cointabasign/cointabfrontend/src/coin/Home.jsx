import React, { useEffect, useState } from 'react';
import styles from './Main.module.css'
import { NavLink, useNavigate } from 'react-router-dom';
function Home() {
  const [data , setData] = useState([])
const navigate = useNavigate();
console.log(data)
const getdata = async(e)=>{
      try{
  const res = await fetch(`http://localhost:8080/getusers`,{
    method:"GET",
    headers:{
      "Content-type":"application/json"
    },

  });
  const data = await res.json();
  console.log(data);
  setData(data)
  if(!data){
    console.log(data)
  }
  console.log("get data")
      }catch(e){
        alert(e);
        console.log(e)
      }

}
useEffect(()=>{
  getdata();
},[])
const deleteUser = async(id)=>{
 
  const res2 = await fetch(`http://localhost:8080/deleteuser/${id}`,{
    method:"PUT",
    headers:{
      "Content-type":"application/json"
    },
   
  });
  const deletedata = await res2.json();
  console.log(deletedata)
  if(res2.status === 404 || !deletedata){
    console.log("error")
  }else{
    console.log("user deleted");
    alert("user deleted")
    getdata();
  }
}
  
  var token = localStorage.getItem("token")
  if(!token){
    navigate("/user")
  }
  return  !data ? (
    <div>
    <button className={styles.Button} onClick={()=>navigate("/adduser")}>Adduser</button>
    <h1>add users first</h1>
    </div>
   ):(
    <div className={styles.Home}>
     <button className={styles.Button} onClick={()=>navigate("/adduser")}>Adduser</button>
      <table className={styles.Table}>
        <thead className={styles.Thead}>
          <tr className={styles.Tr}>
            <th className={styles.Th}>Username</th>
            <th className={styles.Th}>Email</th>
            <th className={styles.Th}>
            </th>
          </tr>
          </thead>
            {data.map((item)=>{
                 return(
                  <tbody className={styles.Tbody} key={item._id}>
                  <tr className={styles.Tr} >
                    <td className={styles.Td}>{item.firstName}</td>
                    <td className={styles.Td}>{item.email}</td>
                    <td className={styles.Td}>
                    <div>
          <NavLink to={`view/${item._id}`}><button className={styles.Btn}>view</button></NavLink>
          <NavLink to={`Edituser/${item._id}`}><button className={styles.Btn}>edit</button></NavLink>
          <button className={styles.Redbtn} onClick={()=>deleteUser(item._id)}>delete</button>
          
        </div>

                    </td>
                  </tr>
                  </tbody>
                 )
            })}
          
        
      </table>

 {/* {data.map((item,_id)=>{
      
      return(
      <div key={item._id} className={styles.blog}>
        
        <h4>Title:{item.title}</h4>
        
        <p>Body:{item.body}</p>
        <p>CreatedAt:{item.createdAt}</p>
        <p>UpdatedAt:{item.updatedAt}</p>
        <div>
          <NavLink to={`view/${item._id}`}><button className={styles.button}>view</button></NavLink>
          <NavLink to={`Edituser/${item._id}`}><button className={styles.button}>edit</button></NavLink>
          <button className={styles.button} onClick={()=>deleteUser(item._id)}>delete</button>
          
        </div>

      </div>
      )
     })} */}
    </div>

  );
}

export default Home;