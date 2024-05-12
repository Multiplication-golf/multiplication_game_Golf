// author: OrsoGames

var script = document.createElement('script');
var bar = document.getElementById('bar');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

const flaskURL = "https://coderyoucantknow.pythonanywhere.com";

var rgbs = { 'red': [255, 0, 0], 'orange': [255, 146, 0], 'yellow': [255, 255, 0], 'green': [0, 128, 0], 'blue': [0, 0, 255], 'crayon':[0, 243, 247], 'purple': [75, 0, 130], 'pink': [238, 130, 238]};

function changeImageColor(imageElement, color) {
  if (typeof imageElement == 'undefined' || typeof color == 'undefined') {
    return;
  }
  try {
  console.log(imageElement)
  imageElement.onload = function() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = imageElement.width;
    canvas.height = imageElement.height;
    ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let l = 0; l < data.length; l += 4) {
      // Skip transparent pixels

      if (data[l + 3] === 0) { continue };


      // Change color of non-transparent pixels
      data[l] = color[0];     // Red
      data[l + 1] = color[1]; // Green
      data[l + 2] = color[2]; // Blue
    }

    ctx.putImageData(imageData, 0, 0);
    imageElement.src = canvas.toDataURL();
  }
  } catch (error) { }
}


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
  document.getElementById("playerid").innerText = "You are " + Name;
  var MONEYCOIN = getCookie("Moneyscore");
  console.log(MONEYCOIN)
  if (MONEYCOIN == "") {
    MONEYCOIN = "0";
  }
  console.log(MONEYCOIN)
  
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
      for (var i = 0; i < users.length; i++) {
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
      var th4 = document.createElement('th');
      th4.innerText = 'profile picture';
      tr.appendChild(th3);
      tr.appendChild(th4);
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
        console.log(users[i][2], typeof typeof users[i][2])
        if (typeof users[i][2] == "object") {
          th3.innerText = users[i][3];
        } else {
          th3.innerText = users[i][2];
        }
        tr.appendChild(th3);
        LB.appendChild(tr);

        try {
          users[i][2]
          var club = document.createElement('img');
          var crosspiece = document.createElement('img');
          var bar = document.createElement('img');
          var handle = document.createElement('img');
          var frame = document.createElement('img');
          var con = document.createElement('div');
          con.classList = 'container';
          club.src = 'golf-club/1.png';
          crosspiece.src = 'golf-club/2.png';
          bar.src = 'golf-club/3.png';
          handle.src = 'golf-club/4.png';
          console.log(club.src
            , crosspiece.src
            , bar.src
            , handle.src)
          frame.src = 'frame.png';
          club.classList = 'image';
          crosspiece.classList = 'image';
          bar.classList = 'image';
          handle.classList = 'image';
          frame.classList = 'image index5';
          con.appendChild(club);
          con.appendChild(crosspiece);
          con.appendChild(bar);
          con.appendChild(handle);
          con.appendChild(frame);
          tr.appendChild(con);

          setTimeout(() => {}, 500);
          console.log("I", i)
          changeImageColor(club, rgbs[users[i][2]['club']]);
          changeImageColor(crosspiece, rgbs[users[i][2]['crosspiece']]);
          changeImageColor(bar, rgbs[users[i][2]['bar']]);
          changeImageColor(handle, rgbs[users[i][2]['handle']]);
        }
        catch (e) {
          console.log(e)
        }

        i++;
      });

    } else {
      console.error('Request failed');
    }
  };
  xhr.send()

}

