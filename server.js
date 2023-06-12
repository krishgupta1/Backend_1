// Server Initiate
const express = require('express');
const app = express();

// Activate the server on 8000 
app.listen(3000, () => {
    console.log("Server Started at port no. 8000");
});

app.get('/', (request, response) => { 
    response.send("Hello ji, Kaise ho saare");
})

app.post('api/cars', (req, res) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    console.log("Car submitted Successfully");
})
console.log("Nothing will added today")``