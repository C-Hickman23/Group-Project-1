var muskCount = document.getElementById("muskCount");
var muskVote = document.getElementById("muskVote");
var zuckCount = document.getElementById("zuckCount");
var zuckVote = document.getElementById("zuckVote");

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
    if(localStorage.Vote !== "Musk" || localStorage.Vote !== "Zuck"){
      localStorage.setItem("Vote", "none");
    }
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
    // console.log(response.data.docs[0].options[0].votes_count);
    muskCount.textContent = response.data.docs[0].options[0].votes_count;
    zuckCount.textContent = response.data.docs[0].options[1].votes_count;
});
}

muskVote.addEventListener("click", function() {
  if(localStorage.Vote == "Zuck"){
    $.ajax({
      url: 'https://api.pollsapi.com/v1/remove/vote',
      crossDomain: true,
      method: 'post',
      headers: {
        'api-key': 'B4VF6779FFMDRPKN7ZXWEBTAPDX3'
      },
      contentType: 'application/json',
      // data: '\n  {\n      "vote_id": "64c0863225e6ed0010f8aac4"\n  }\n',
      data: JSON.stringify({
        'vote_id': localStorage.ID
      })
    }).done(function(response) {
      console.log(response);
      console.log("removed vote for Zuck")
    });
  }
  if(localStorage.Vote == "Zuck" || localStorage.Vote == "none"){
    $.ajax({
      url: 'https://api.pollsapi.com/v1/create/vote',
      crossDomain: true,
      method: 'post',
      headers: {
        'api-key': 'B4VF6779FFMDRPKN7ZXWEBTAPDX3'
      },
      contentType: 'application/json',
      // data: '\n  {\n      "poll_id": "64c0863225e6ed0010f8aac2",\n      "option_id": "64c0863225e6ed0010f8aac3",\n      "identifier": "user_12"\n  }\n  ',
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
  updateNumbers();
})

zuckVote.addEventListener("click", function() {
  if(localStorage.Vote == "Musk"){
    $.ajax({
      url: 'https://api.pollsapi.com/v1/remove/vote',
      crossDomain: true,
      method: 'post',
      headers: {
        'api-key': 'B4VF6779FFMDRPKN7ZXWEBTAPDX3'
      },
      contentType: 'application/json',
      // data: '\n  {\n      "vote_id": "64c0863225e6ed0010f8aac4"\n  }\n',
      data: JSON.stringify({
        'vote_id': localStorage.ID
      })
    }).done(function(response) {
      console.log(response);
      console.log("removed vote for Musk")
    });
  }
  if(localStorage.Vote == "Musk" || localStorage.Vote == "none") {
    $.ajax({
      url: 'https://api.pollsapi.com/v1/create/vote',
      crossDomain: true,
      method: 'post',
      headers: {
        'api-key': 'B4VF6779FFMDRPKN7ZXWEBTAPDX3'
      },
      contentType: 'application/json',
      // data: '\n  {\n      "poll_id": "64c0863225e6ed0010f8aac2",\n      "option_id": "64c0863225e6ed0010f8aac3",\n      "identifier": "user_12"\n  }\n  ',
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
  updateNumbers();
})

updateNumbers();