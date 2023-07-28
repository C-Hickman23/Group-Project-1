const url = 'https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=TSLA&datatype=json';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cc909ce80amsh69e6d1be78828e4p14bd29jsne3188d5fc095',
		'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
	}
};


async function displayRegularMarketPrice() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const openMarketPrice = data.results;
   

    //Display Price
    var responseContainer = document.getElementById('response-container');
    responseContainer.innerHTML = `Regular Market Price: ${openMarketPrice}`;
  } catch (error) {
    console.error('Error fetching API:', error);
  }
}

//Button Response
var fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', displayRegularMarketPrice);
