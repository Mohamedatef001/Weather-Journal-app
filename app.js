
let d = new Date();

let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='

// Personal API Key for OpenWeatherMap API
  let apiKey = '&appid=9963cc446752d244b1bacb86239f06c2&units=imperial';
  
// Event listener to add function to existing HTML DOM element
  document.getElementById('generate').addEventListener('click', performAction);
  
// Function called by event listener 
  function performAction(e){
  const code =  document.getElementById('zip').value;
  const feeling =  document.getElementById('feelings').value;
  

  getTemp(baseURL, code, apiKey)

  .then(function(data){

    console.log(data);

    postData('/add', {date:d, temp:data.main.temp, content:feeling})
    retrieveData();
  })

  };

  const getTemp = async (baseURL, code, apiKey)=>{

    const res = await fetch(baseURL+code+apiKey)

    try {
  
      const data = await res.json();
      console.log(data)
      return data;
    }  catch(error) {
      console.log("error", error);
    }
  };

  /* Function to POST data */
  const postData = async ( url = '', data = {})=>{
      console.log(data)
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),     
    });
  
      try {
        const newData = await response.json();
         console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  };

  const retrieveData = async () =>{
    const request = await fetch('/all');
    try {
    // Transform into JSON
    const allData = await request.json()
    // Write updated data to DOM elements    
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.temp;
    document.getElementById('content').innerHTML = allData.content;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
   };