var muskCount = $.getElementById("muskCount");
var muskVote = $.getElementById("muskVote");
var zuckCount = $.getElementById("zuckCount");
var zuckVote = $.getElementById("zuckVote");

//console logging the poll data
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

function updateNumbers() {
  $.ajax({
    url: 'https://api.pollsapi.com/v1/get/polls-with-identifier/MUSKVZUCK',
    crossDomain: true,
    headers: {
      'accept': 'application/json',
      'api-key': 'B4VF6779FFMDRPKN7ZXWEBTAPDX3'
    }
  }).done(function(response) {
    muskCount.textContent = response.children().children().children().children()[0].votes_count;
    zuckCount.textContent = response.children().children().children().children()[1].votes_count;
});
}

muskVote.addEventListener("click", function() {
  fetch('https://api.pollsapi.com/v1/get/vote/64c0863225e6ed0010f8aac3', {
  headers: {
    'content-type': 'application/json',
    'api-key': 'B4VF6779FFMDRPKN7ZXWEBTAPDX3'
  }
});
  updateNumbers();
})

muskVote.addEventListener("click", function() {
  fetch('https://api.pollsapi.com/v1/get/vote/64c0863225e6ed0010f8aac4', {
  headers: {
    'content-type': 'application/json',
    'api-key': 'B4VF6779FFMDRPKN7ZXWEBTAPDX3'
  }
});
  updateNumbers();
})

updateNumbers();