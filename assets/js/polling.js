var muskCount = document.getElementById("muskCount");
var muskVote = document.getElementById("muskVote");
var zuckCount = document.getElementById("zuckCount");
var zuckVote = document.getElementById("zuckVote");

//initially console logging the poll data
$.ajax({
    url: 'https://api.pollsapi.com/v1/get/polls-with-identifier/MUSKVZUCK',
    crossDomain: true,
    headers: {
      'accept': 'application/json',
      'api-key': 'B4VF6779FFMDRPKN7ZXWEBTAPDX3'
    }
  }).done(function(response) {
    console.log(response);
    if(localStorage.Vote != "Musk" || localStorage.Vote != "Zuck"){
      localStorage.setItem("Vote", "none");
    }
});

//updates the poll numbers for both vote counts
function updateNumbers() {
  $.ajax({
    url: 'https://api.pollsapi.com/v1/get/polls-with-identifier/MUSKVZUCK',
    crossDomain: true,
    headers: {
      'accept': 'application/json',
      'api-key': 'B4VF6779FFMDRPKN7ZXWEBTAPDX3'
    }
  }).done(function(response) {
    //updates the id's zuckCount and muskCount
    muskCount.textContent = response.data.docs[0].options[0].votes_count;
    zuckCount.textContent = response.data.docs[0].options[1].votes_count;
});
}

//if the Musk vote button is clicked
muskVote.addEventListener("click", function() {
  //checking to see if user submitted a alternate vote to see if one needs to be removed
  if(localStorage.Vote == "Zuck"){
    $.ajax({
      url: 'https://api.pollsapi.com/v1/remove/vote',
      crossDomain: true,
      method: 'post',
      headers: {
        'api-key': 'B4VF6779FFMDRPKN7ZXWEBTAPDX3'
      },
      contentType: 'application/json',
      data: JSON.stringify({
        'vote_id': localStorage.ID
      })
    }).done(function(response) {
      console.log(response);
      console.log("removed vote for Zuck")
    });
  }
  //checking to see if they already submitted this current vote
  if(localStorage.Vote == "Zuck" || localStorage.Vote == "none"){
    $.ajax({
      url: 'https://api.pollsapi.com/v1/create/vote',
      crossDomain: true,
      method: 'post',
      headers: {
        'api-key': 'B4VF6779FFMDRPKN7ZXWEBTAPDX3'
      },
      contentType: 'application/json',
      data: JSON.stringify({
        'poll_id': '64c0863225e6ed0010f8aac2',
        'option_id': '64c0863225e6ed0010f8aac3',
        'identifier': 'user_12'
      })
    }).done(function(response) {
      console.log(response);
      localStorage.setItem("ID", response.data.id);
    });
    localStorage.Vote = "Musk";
  }
  //updates no matter what
  updateNumbers();
})

zuckVote.addEventListener("click", function() {
  //checking to see if user submitted a alternate vote to see if one needs to be removed
  if(localStorage.Vote == "Musk"){
    $.ajax({
      url: 'https://api.pollsapi.com/v1/remove/vote',
      crossDomain: true,
      method: 'post',
      headers: {
        'api-key': 'B4VF6779FFMDRPKN7ZXWEBTAPDX3'
      },
      contentType: 'application/json',
      data: JSON.stringify({
        'vote_id': localStorage.ID
      })
    }).done(function(response) {
      console.log(response);
      console.log("removed vote for Musk")
    });
  }
  //checking to see if they already submitted this current vote
  if(localStorage.Vote == "Musk" || localStorage.Vote == "none") {
    $.ajax({
      url: 'https://api.pollsapi.com/v1/create/vote',
      crossDomain: true,
      method: 'post',
      headers: {
        'api-key': 'B4VF6779FFMDRPKN7ZXWEBTAPDX3'
      },
      contentType: 'application/json',
      data: JSON.stringify({
        'poll_id': '64c0863225e6ed0010f8aac2',
        'option_id': '64c0863225e6ed0010f8aac4',
        'identifier': 'user_12'
      })
    }).done(function(response) {
      console.log(response);
      localStorage.setItem("ID", response.data.id);
    });
    localStorage.Vote = "Zuck";
  }
  //updates no matter what
  updateNumbers();
})

updateNumbers();