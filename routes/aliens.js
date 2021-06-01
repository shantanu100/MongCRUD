const express = require('express');
const alien = require('../models/alien');
const router = express.Router();
const Alien = require('../models/alien')

router.get('/', async(req,res)=>{
    try{
        console.log("its in try");
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err){
        res.send("error" + err)
    }
})


router.get('/:id', async(req,res)=>{
    try{
        
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
        res.send("error" + err)
    }
})

router.post('/',async(req,res)=>{
    console.log("post route reached");

     const alien = new Alien({
        name : req.body.name,
        tech : req.body.tech,
        sub : req.body.sub
    })
  
    try{
        console.log("in try")
        const a1 = await alien.save()
        res.json(a1)
         
    }catch(err){
        res.send("Error")
    }

});


router.patch('/:id', async(req,res)=>{
    try{
        
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send("error" + err)
    }
})


router.delete('/:id', async(req,res)=>{
    try{
        
        const alien = await Alien.findById(req.params.id)
    
        const a1 = await alien.remove()
        res.json(a1)
    }catch(err){
        res.send("error" + err)
    }
})

module.exports = router