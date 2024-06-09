// author: OrsoGames

var script = document.createElement('script');
var bar = document.getElementById('bar');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

const flaskURL = "https://coderyoucantknow.pythonanywhere.com";

var rgbs = { 'red': [255, 0, 0], 'orange': [255, 146, 0], 'yellow': [255, 255, 0], 'green': [0, 128, 0], 'blue': [0, 0, 255], 'crayon': [0, 243, 247], 'purple': [75, 0, 130], 'pink': [238, 130, 238] };

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
  const Name = getCookie("Name");
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
      th4.innerHTML = '<img src="golf-club-pr .png" style="width:50px;hieght:50px"/>';
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
        console.log("typeof users[i][3]")
        if (typeof users[i][3] == "object") {
          th3.innerText = users[i][4];
        } else if (typeof users[i][2] == "object") {
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
          function a() {
            let III = i;
            frame.addEventListener('click', () => {
              var prConteiner = document.getElementById('profile-container');
              prConteiner.style.display = 'block';
              var name = document.getElementById('name_pr');
              console.log(users, i, III)
              name.innerText = users[III][0];
              var club_ = document.createElement('img');
              var crosspiece_ = document.createElement('img');
              var bar_ = document.createElement('img');
              var handle_ = document.createElement('img');
              var frame_ = document.createElement('img');
              var con_ = document.getElementById("setIMG");
              var rankPR = document.getElementById('rank');
              if (typeof users[III][3] == "object") {
                rankPR.innerText = "Rank:" + users[III][4];
              } else if (typeof users[III][2] == "object") {
                rankPR.innerText = "Rank:" + users[III][3];
              } else {
                rankPR.innerText = "Rank:" + users[III][2];
              }

              var moneyPR = document.getElementById('money');
              moneyPR.innerHTML = "<img src='coin.gif' style='position: relative; top:4.5px; width: 30px; height: 30px; margin-top: 5px;'/>" + users[III][1];
              club_.src = 'golf-club/1.png';
              crosspiece_.src = 'golf-club/2.png';
              bar_.src = 'golf-club/3.png';
              handle_.src = 'golf-club/4.png';
              frame_.src = 'frame.png';
              club_.classList = 'img-jxmfj8381jd8d82';
              crosspiece_.classList = 'img-jxmfj8381jd8d82';
              bar_.classList = 'img-jxmfj8381jd8d82';
              handle_.classList = 'img-jxmfj8381jd8d82';
              frame_.classList = 'img-jxmfj8381jd8d82';
              con_.appendChild(club_);
              con_.appendChild(crosspiece_);
              con_.appendChild(bar_);
              con_.appendChild(handle_);
              con_.appendChild(frame_);
              changeImageColor(club_, rgbs[users[III][2]['club']]);
              changeImageColor(crosspiece_, rgbs[users[III][2]['crosspiece']]);
              changeImageColor(bar_, rgbs[users[III][2]['bar']]);
              changeImageColor(handle_, rgbs[users[III][2]['handle']]);
              console.log(typeof users[III][4]);
              if (typeof users[III][4] != "undefined") {
                var club_dec = document.createElement('img');
                var crosspiece_dec = document.createElement('img');
                var bar_dec = document.createElement('img');
                var handle_dec = document.createElement('img');
                console.log(users[III][3], users[III][3]['club'])
                club_dec.src = users[III][3]['club'];
                crosspiece_dec.src = users[III][3]['crosspiece'];
                bar_dec.src = users[III][3]['bar'];
                handle_dec.src = users[III][3]['handle'];
                club_dec.classList = 'img-jxmfj8381jd8d82';
                crosspiece_dec.classList = 'img-jxmfj8381jd8d82';
                bar_dec.classList = 'img-jxmfj8381jd8d82';
                handle_dec.classList = 'img-jxmfj8381jd8d82';
                con_.appendChild(club_dec);
                con_.appendChild(crosspiece_dec);
                con_.appendChild(bar_dec);
                con_.appendChild(handle_dec);
              }
            });

          }
          a();

          setTimeout(() => { }, 50);
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
  setTimeout(() => {
    if (window.innerWidth < window.innerHeight) {
      try {
        var ths = $("th").get();
        alert(ths)
        ths.forEach(th => {
          th.style.fontSize = "30px";
          th.style["padding-left"] = "0.5px";
          th.style["padding-right"] = "0.5px";
        });
      } catch (e) {
        alert(e);
      }
    }
  }, 1000)
  document.getElementById("X").addEventListener("click", () => { document.getElementById('profile-container').style.display = 'none' })

}

