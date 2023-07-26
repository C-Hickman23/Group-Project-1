// meta api
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://realstonks.p.rapidapi.com/META',
  headers: {
    'X-RapidAPI-Key': '10e972a7bbmshe78c2f0e0fa9859p1df292jsn2ca962141c24',
    'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


// twtr api
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://realstonks.p.rapidapi.com/TWTR',
  headers: {
    'X-RapidAPI-Key': '10e972a7bbmshe78c2f0e0fa9859p1df292jsn2ca962141c24',
    'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}