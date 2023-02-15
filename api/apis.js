const express = require('express');
const Employee = require('../models/employee')
const router = express.Router()


// Post Apis 

router.post('/post',async(req,res)=>{

    const data = Employee({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        companyname:req.body.companyname
    })
    try
{
    const empdata = await data.save();
    res.status(200).json(empdata);


}catch(err){
    res.status(500).json({"message":err.message});  
}
})


// Getall

router.get('/getall',async(req,res)=>{
try
{
    const employee = await Employee.find();
    res.status(200).json({"message":employee})
}catch(err){
    res.status(500).json({"message":err.message});  
}
})


// get by employee id 

router.get('/getone/:id',async(req,res)=>{
    try
    {
        const employee = await Employee.findById(req.params.id);
        res.status(200).json({"message":employee})
    }catch(err){
        res.status(500).json({"message":err});  
    }
    })



    // update employee by id
router.put('/update/:id',async(req,res)=>{
  try{
    const id = req.params.id;
    const updatedata = req.body;

    const employee = await Employee.findOneAndUpdate(
        id,updatedata
    )
    res.status(200).json({"message":employee})

  }catch(err){
    res.status(500).json({"message":err});  
}
})


// delete employee by id 

router.delete('/delete/:id',async(req,res)=>{
    try{
      const id = req.params.id;
      const empdata = await Employee.findByIdAndDelete(id)
      res.status(200).json({"message":`Record with ${empdata.name} has been deleted`})

        }catch(err){
        res.status(500).json({"message":err.message});  
    } 
})







module.exports = router;