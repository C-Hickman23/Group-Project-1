$.ajax({
    url: 'https://api.pollsapi.com/v1/get/polls-with-identifier/MUSKVZUCK',
    crossDomain: true,
    headers: {
      'accept': 'application/json',
      'api-key': 'B4VF6779FFMDRPKN7ZXWEBTAPDX3'
    }
  }).done(function(response) {
    console.log(response);
  });
  