const url = 'https://yh-finance-complete.p.rapidapi.com/price?symbol=TSLA';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cc909ce80amsh69e6d1be78828e4p14bd29jsne3188d5fc095',
    'X-RapidAPI-Host': 'yh-finance-complete.p.rapidapi.com'
  }
};

async function displayRegularMarketPrice() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const regularMarketPrice = data.price.regularMarketPrice;

    //Display Price
    const responseContainer = document.getElementById('response-container');
    responseContainer.innerHTML = `Regular Market Price: ${regularMarketPrice}`;
  } catch (error) {
    console.error('Error fetching API:', error);
  }
}

//Button Response
const fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', displayRegularMarketPrice);
