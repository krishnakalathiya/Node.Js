// import express from 'express' // modulejs
 const express = require('express') // commonjs
const app = express()

app.get("/" , (req , res) => {
  res.send("Welcome to express.js server")
})

app.get("/home" , (req , res) => {
  res.send("Welcome to Home Page")
})


app.listen(3001 , () => {
  console.log("server start on port 3001");
})

