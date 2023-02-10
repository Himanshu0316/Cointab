const express = require("express");
const router = express.Router();
const {Users} = require("../models/user")

//getblog

router.get("/getusers",async(req,res)=>{
    try{
        const userData = await Users.find();
        console.log(userData)
       return res.status(201).json(userData);
       
    }catch(error){
        console.log("e:",error)
          return res.status(404).json(error)
          
    }
})

router.get("/getuser/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const userindividual = await Users.findById({_id:id});
        console.log(userindividual)
        res.status(201).json(userindividual)
    }catch(error){
           res.status(404).json(error)
    }
})
//update
router.put("/updateuser/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const updateduser = await Users.findByIdAndUpdate(id,req.body,{
            new:true,
            
        });
        
        console.log(updateduser);
        res.status(201).json(updateduser)
    }catch(error){
         res.status(404).json(error);
    }
})
//delete
router.put("/deleteuser/:id",async(req,res)=>{
    try{
        const {id} = req.params;
        const deleteduser = await Users.deleteOne({_id:id})
        
        console.log(deleteduser);
        res.status(201).json(deleteduser)
    }catch(error){
         res.status(404).json(error);
    }
})

module.exports = router;