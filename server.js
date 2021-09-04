const express = require('express')
const path = require('path')

const SayHi = require ('./sayHI')
const student = require ('./routers/students')

// invoke express
const app = express ()
// middleware parse

app.use(express.json())
// middleware (static folder)

app.use(express.static(path.join(__dirname,'public')))
app.use(SayHi)
app.use('/api',student)
app.listen(5000,(err)=> {
    if (err){
        throw err
    }
    else {
        console.log('SERVER IS UP AND RUNNING !')
    }
})


