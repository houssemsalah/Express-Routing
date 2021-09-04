const express = require('express')
const router = express.Router()
const students = require('../Students')


// get all students
router.get('/students',(req,res)=>{
    res.json (students)
})
// get student by id

router.get('/students/:id',(req,res)=>{
    let student = students.filter(student => student.id === parseInt(req.params.id))
    if (student.length === 0 ){
        res.json({msg: "There is no user with this ID "+ req.params.id})
    }
    else {
        res.json(student)
    }
    
})

// delete student by id 

router.delete('/students/:id', (req,res)=> {
    let student = students.filter(student => student.id !== parseInt(req.params.id))
    res.json(student)
    
})


// add new student 

router.post('/students', (req,res)=>{
   res.json(students.concat(req.body))
   res.send("added  ")

})


// edit new student

router.put('/students/:id',(req,res)=>{
    res.json(students.map(el => el.id === parseInt(req.params.id) ? {...req.body,id: el.id} : el))
})

module.exports = router 