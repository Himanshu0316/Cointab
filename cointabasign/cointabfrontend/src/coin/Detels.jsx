import React, { useEffect,useState} from 'react'
import {useParams} from "react-router-dom";

const Detels = () => {
  const {id} = useParams("");
  console.log(id)
  const [data,setData] = useState([]);
console.log(data)
  const getdata = async(e)=>{
  try{
   
    const res = await fetch(`http://localhost:8080/getuser/${id}`,{
      method:"GET",
      headers:{
        "Content-type":"application/json"
      }
     
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
      console.log("blog deleted");
      getdata();
    }
  }
  return (
    <>
    
    
     <div key={data._id} >
       <h4>{data.firstName}</h4>
       
       <p>{data.lastName}</p>
       <p>{data.email}</p>
      
       <div>
       
          <button  onClick={()=>deleteUser(data._id)}>delete</button>
       </div>

     </div>
    
    </>
  )
}

export default Detels