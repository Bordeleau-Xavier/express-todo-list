const express = require('express');
const dotenv = require('dotenv');

dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
  });

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);