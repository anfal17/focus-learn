const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(express.json())

app.use(cors({
    origin: '*',
    credentials: true,
  }));

  //routes


  //testing route
  app.get('/' , (req,res)=>{
    res.send("Api working");
  })

  app.listen(port , ()=>{
    console.log(`server listening on port ${port}`);
  })