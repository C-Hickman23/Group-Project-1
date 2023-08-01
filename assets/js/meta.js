const url2 = 'https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=META&datatype=json';
const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cc909ce80amsh69e6d1be78828e4p14bd29jsne3188d5fc095',
		'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
	}
};


async function displayRegularMarketPrice() {
  try {
    var response = await fetch(url2, options2);
    var data = await response.json();
    //stores data from API for META
    var timeSeriesDaily = data ["Time Series (Daily)"];
   
    //Finds keys for the latest market price from object in array
    var latestDate = Object.keys(timeSeriesDaily)[0];
    var regularMarketPrice = timeSeriesDaily[latestDate]['4. close'];

    //Display Price
    var responseContainer = document.getElementById('meta-container');
    responseContainer.innerHTML = `Regular Market Price: ${regularMarketPrice}`;
  } catch (error) {
    console.error('Error fetching API:', error);
  }
}

//Button Response
var fetchButton = document.getElementById('meta-button');
fetchButton.addEventListener('click', displayRegularMarketPrice);
