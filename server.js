// Setup empty JS object to act as endpoint for all routes
projectData ={}

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('website'));
const port = 8080;
const server = app.listen(port, listening);
function listening(){
     console.log("server running");
     console.log(`running on localhost:` + `${port}`);
}


 app.get('/all', getData)

 function getData(req, res){
  res.send(projectData);
  console.log(projectData);
}

 app.post('/add', addData)

 function addData(req, res) {
  console.log(req.body);
    newEntry = {
      date : req.body.date,
      temp : req.body.temp,
      content : req.body.content
    };
    projectData = newEntry;
    res.send(projectData);

};