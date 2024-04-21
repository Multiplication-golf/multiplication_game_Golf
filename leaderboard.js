// author: OrsoGames

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

const flaskURL = "https://41245304-a1a2-410d-8aa4-2fb79ed67f93-00-13q9cm7t89rir.picard.replit.dev:8080";

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function getKeyFromUrl() {
  let urlString = window.location.href;
  let url = new URL(urlString);
  let key = url.searchParams.get("key");
  return key;
}

window.onload = function() {
  const Name = getCookie("Name")
  document.getElementById("playerid").innerText = "You are "+Name;
  const MONEYCOIN = getCookie("Moneyscore");
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `${flaskURL}/ADDplayer/${MONEYCOIN}/${Name}`, true);

  xhr.onload = function() {
    if (xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
    } else {
      console.error('Request failed');
    }
  };
  xhr.send()
  
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `${flaskURL}/GetleaderBoard/`, true);

  xhr.onload = function() {
    if (xhr.status == 200) {
      // Parse the response as JSON
      var response = JSON.parse(xhr.responseText);
      var users = response
      console.log(response);
      for (var i = 0;i < users.length;i++) {
        users[i].shift()
      }
      var LB = document.getElementById("leader-board")
      var tr = document.createElement('tr');
      var th = document.createElement('th');
      th.innerText = 'user';
      tr.appendChild(th);
      var th2 = document.createElement('th');
      th2.innerText = 'score';
      tr.appendChild(th2);
      var th3 = document.createElement('th');
      th3.innerText = 'rank';
      tr.appendChild(th3);
      LB.appendChild(tr);
      var i = 0

      users.forEach(user => {
        var tr = document.createElement('tr')
        var th = document.createElement('td');
        th.innerText = users[i][0];
        tr.appendChild(th);
        var th2 = document.createElement('td');
        th2.innerText = users[i][1];
        tr.appendChild(th2);
        var th3 = document.createElement('td');
        th3.innerText = users[i][2];
        tr.appendChild(th3);
        LB.appendChild(tr);
        i++;
      });

    } else {
      console.error('Request failed');
    }
  };
  xhr.send()
  
}

