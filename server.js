// Server Initiate
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
/*Specifically parse  JSON data & add it to the request.Body on Object */
app.use(bodyParser.json());

// Activate the server on 8000 
app.listen(8000, () => {
    console.log("Server Started at port no. 8000");
});

// Routes
app.get('/', (request, response) => { 
    response.send("Hello ji, Kaise ho saare");
})

app.post('/api/cars', (request, response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    console.log("Car submitted Successfully");
})

// Connection Between Server(Express JS) and (Database)MongoDB 

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase', {
useNewUrlParser:true ,
useUnifiedTopology:true 
})

.then(() => {console.log("Connection Successful")})
.catch((error) => {console.log("Received an Error")});