const router = require("express").Router()
const User = require("../models/User.model")



router.get('/all',(req,res)=>{
    User.find()
    .then(allUsers=>{
        res.json(allUsers)
    })
    .catch((err) => console.log(err))
})



router.post('/create',(req,res)=>{
    console.log('los datos a guardar son', req.body)

    User.create(req.body)
    .then(newUser => {
    
        return res.json(newUser)
    })
    .catch(console.log)
    
})


module.exports = router;