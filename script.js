// author: Orso Games

// { vars == === == === == === == ===}
const swingbutton = document.getElementById("swing_button");
const start__button_ = document.getElementById("start__button_");
const LeveL_ = getCookie("Userlevel");
console.log("LeveL_", LeveL_);
const MONEYCOIN = getCookie("Moneyscore");
const flaskURL = "https://41245304-a1a2-410d-8aa4-2fb79ed67f93-00-13q9cm7t89rir.picard.replit.dev:8080";
// { vars == === == === == === == ===}

function init() {
  document.getElementById('_(level)_').style.display = 'none';
  document.getElementById('_(login)_').style.display = 'block';
  document.getElementById('_(intoP)_').style.display = 'none';
  document.getElementById('_(courseDone)_').style.display = 'none';
  let dropdownList = document.getElementById('course');
  document.getElementById('NoneCourse').innerText = "classic";
  dropdownList.onchange = (ev) => {
    document.getElementById('NoneCourse').innerText = dropdownList.value;
  }
  
  // Create an AJAX request
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `${flaskURL}/returnjson`, true);
  console.log(`${flaskURL}/returnjson`)

  xhr.onload = function() {
    if (xhr.status == 200) {
      // Parse the response as JSON
      var response = JSON.parse(xhr.responseText);

      console.log("xhr:", response)

      // Get the <select> element
      var courseSelect = document.getElementById('course');
      var courses = Object.keys(response);
      console.log(courses);

      console.log("len:", courses.length);

      // Loop through the course names and update the <select>
      for (var i = 0; i < (courses.length); i++) {
        var option = document.createElement('option');
        option.value = courses[i];
        option.textContent = courses[i];
        courseSelect.appendChild(option);
      }
    } else {
      console.error('Request failed');
    }
  };
  xhr.send();
}
enableScroll();
init();



// ToDO: add exsamples
window.onload = function() {
  var baseURL_ = window.location.href;
  const herf = document.getElementById("herf to next builder");
  herf.setAttribute("href", `${baseURL_}/levelmaker.html`);
  const swingbutton = document.getElementById("_swing_button_");
  const start__button_ = document.getElementById("start__button_");
  const LeveL_ = getCookie("Userlevel");
  console.log("LeveL_", LeveL_);
  const MONEYCOIN = getCookie("Moneyscore");

  var eliflevel = 0;
  if (LeveL_ !== "") {
    var course_ = document.getElementById("NoneCourse").innerText;
    console.log("level is not null");

    var level = Number(LeveL_);

    if (course_ === "classic") {
      document.getElementById("swinglevel").innerText = level + 1;
    } else {
      document.getElementById("swinglevel").innerText = 1;
    }
    start__button_.addEventListener("click", function() {
      var course_ = document.getElementById("NoneCourse").innerText;
      if (course_ === "classic") {
        var __level___ = level + 1;
      } else {
        var __level___ = 1;
      }
      console.log("not null :", __level___)
      loadlevelandsetUpGame(__level___);
      if (course_ === "classic") {
        document.getElementById("swinglevel").innerText = level + 1;
      } else {
        document.getElementById("swinglevel").innerText = 1;
      }

      swingbutton.addEventListener("click", function() { swing__(); });
    });

  } else {
    console.log("level is null");
    swingbutton.addEventListener("click", function() { swing__(); });

    var course_ = document.getElementById("NoneCourse").innerText;
    var level = Number(eliflevel);

    if (course_ === "classic") {
      var __level___ = level + 1;
    } else {
      var __level___ = 1;
    }
    console.log(__level___)
    document.getElementById("swinglevel").innerText = __level___;

    start__button_.addEventListener("click", function() {
      var __course_ = document.getElementById("NoneCourse").innerText;
      if (__course_ === "classic") {
        var __level____ = level + 1;
      } else {
        var __level____ = 1;
      }
      loadlevelandsetUpGame(__level____);
    });
  }

  if (MONEYCOIN !== "") {
    document.getElementById("money_-__-").innerText = MONEYCOIN;
  } else {
    document.getElementById("money_-__-").innerText = 0;
  }
  function preventSubmission(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Call swing__() function
    swing__();
  }

  // Get the form element
  var form = document.getElementById('sudmit___'); // Replace 'yourFormId' with the actual ID of your form

  // Add event listener to the form for 'submit' event
  form.addEventListener('submit', preventSubmission);
}
function enableScroll() {
  // Remove the event listener that disables scrolling
  window.onscroll = null;
}
function getScrollDisableCount() {
  return scrollDisableCount;
}
function disableScroll() {
  // Get the current page scroll position in the vertical direction
  scrollTop =
    window.scrollY || document.documentElement.scrollTop;


  // Get the current page scroll position in the horizontal direction 

  scrollLeft =
    window.scrollX || document.documentElement.scrollLeft;


  // if any scroll is attempted,
  // set this to the previous value
  window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
  };
}
async function o() {
  console.log("opp")
}
function transtonextpage() {
  document.getElementById('_(level)_').style.display = 'none';
  document.getElementById('_(login)_').style.display = 'none';
  document.getElementById('_(intoP)_').style.display = 'block';
  document.getElementById('_(courseDone)_').style.display = 'none';
}
function openDIS(__time_____) {
  transtonextpage();
  getJavaSRCX();

  document.getElementById("input-box").value = '';
  document.getElementById('_(intoP)_').style.display = 'block';
  console.log("timeleft: " + __time_____)
  var __time____ = __time_____.replace(/:/g, "");
  var money_now = document.getElementById("money_-__-").innerText;
  var total_money = Number(__time____) + Number(money_now);
  console.log("$", total_money)
  var current_ = document.getElementById('money_-__-').innerHTML;
  document.getElementById("timedis").innerHTML = "TIME LEFT: " + __time____ + " seconds";
  const timeperframe = ((total_money - current_) * 100) / 20;

  function animateValue(id) {
    var obj = document.getElementById(id);
    var current = obj.innerHTML;

    for (var i = 0; i < (total_money - current); i++) {
      if (current <= total_money) {
        setTimeout(() => {
          current++;
          obj.innerHTML = current;
        }, timeperframe * i);
      } else {
        break;
      }
    }
  }
  if (__time____ > 18) {
    document.getElementById("disIMG").src = 'next_pages/4.png';
  } else if (__time____ > 15) {
    document.getElementById("disIMG").src = 'next_pages/3.png';
  } else if (__time____ > 10) {
    document.getElementById("disIMG").src = 'next_pages/2.png';
  } else if (__time____ > 0) {
    document.getElementById("disIMG").src = 'next_pages/1.png';
  } else {
    document.getElementById("disIMG").src = 'next_pages/0.png';
  }

  setCookie("Moneyscore", Number(total_money), 765);
  animateValue('money_-__-');
  setTimeout(function() {
    document.getElementById("money_-__-").innerText = total_money;
  }, (timeperframe * ((total_money - Number(money_now)) + 1)))
}
function done() {
  document.getElementById('_(courseDone)_').style.display = 'block';
  document.getElementById('_(level)_').style.display = 'none';
  document.getElementById('_(login)_').style.display = 'none';
  document.getElementById('_(intoP)_').style.display = 'none';
  disableScroll();
  var course_____ = document.getElementById('NoneCourse').innerText;
  document.getElementById('coures--___---_--').innerText = course_____;
  console.log(course_____)
  if (course_____ != 'classic') {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `${flaskURL}/returnHowManyLevels/${course_____}`, true);

    xhr.onload = function() {
      if (xhr.status == 200) {
        // Parse the response as JSON
        var response = JSON.parse(xhr.responseText);

        console.log("xhr:", response)

        var reward_ = (response * 10) + 100;
        document.getElementById("reward").innerHTML = reward_ + "<img src='---.gif' class='coin-gif--lb0owlqodkewkd' />";
        var money_now = document.getElementById("money_-__-").innerText;
        var total_money = Number(reward_) + Number(money_now);
        setCookie("Moneyscore", Number(total_money), 765);
      } else {
        console.error('Request failed');
      }
    };
  }
  if (course_____ == 'classic') {

    var reward_ = (response * 10) + 100;
    document.getElementById("reward").innerHTML = reward_ + "<img src='---.gif' class='coin-gif--lb0owlqodkewkd' />";
    var money_now = document.getElementById("money_-__-").innerText;
    var total_money = Number(reward_) + Number(money_now);
    setCookie("Moneyscore", Number(total_money), 765);

  }
}
function loadLevelData(___level_) {
  var course_ = document.getElementById("NoneCourse").innerText;
  console.log("course_", course_);
  if (course_ == "classic") {
    var imageNumbers;
    if (___level_ == 1) {
      imageNumbers =
        [[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 4],
        [4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 4],
        [4, 4, 4, 4, 2, 2, 2, 2, 2, 3, 2, 4],
        [4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4]];
    }
    if (___level_ == 2) {
      imageNumbers =
        [[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4],
        [4, 4, 4, 4, 1, 2, 2, 2, 2, 2, 2, 4],
        [4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 4],
        [4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 2, 3, 2, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 2, 2, 2, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 5, 2, 6, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4]];
    }
    if (___level_ == 3) {
      imageNumbers =
        [[4, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 4],
        [4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4],
        [4, 2, 2, 8, 4, 4, 1, 1, 1, 2, 2, 4],
        [4, 3, 2, 4, 9, 7, 2, 2, 2, 2, 2, 4],
        [4, 4, 4, 4, 5, 2, 2, 8, 2, 2, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 5, 2, 6, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4]];
    }
    if (___level_ == 4) {
      imageNumbers =
        [[4, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4],
        [4, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 2, 2, 4, 1, 10, 1, 4, 4, 4, 4, 4],
        [4, 2, 2, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 2, 3, 4, 5, 2, 2, 4, 4, 4, 4, 4],
        [4, 2, 2, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4]];
    }
    if (___level_ == 5) {
      imageNumbers =
        [[4, 4, 4, 4, 1, 1, 1, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 3, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 1, 10, 1, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 5, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 6, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 5, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 6, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 5, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 6, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 5, 2, 2, 4, 4, 4, 4, 4]];
    }
    if (___level_ == 6) {
      imageNumbers =
        [[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 1, 1, 1, 4, 4, 4, 4, 4],
        [4, 1, 1, 1, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 2, 2, 2, 2, 3, 2, 4, 4, 4, 4, 4],
        [4, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 13, 12, 11, 1, 1, 1, 4, 4, 4, 4, 4],
        [4, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 5, 2, 2, 4, 4, 4, 4, 4]];
    }
    if (___level_ == 7) {
      imageNumbers =
        [[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 1, 1, 1, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 3, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 13, 12, 11, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 5, 2, 6, 4, 4, 4, 4, 4]];
    }
    if (___level_ == 8) {
      imageNumbers =
        [[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 9, 7, 7, 7, 7, 7, 4, 4],
        [4, 4, 4, 4, 16, 2, 2, 2, 2, 3, 4, 4],
        [4, 4, 4, 4, 16, 2, 15, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 16, 2, 15, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 16, 2, 15, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 16, 2, 15, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 16, 2, 15, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 16, 2, 15, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 16, 2, 15, 4, 4, 4, 4, 4]];
    }
    if (___level_ == 9) {
      imageNumbers =
        [[4, 4, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4],
        [4, 4, 2, 2, 2, 2, 2, 2, 2, 15, 4, 4],
        [4, 4, 2, 2, 1, 1, 4, 2, 2, 15, 4, 4],
        [4, 4, 2, 2, 2, 2, 4, 2, 2, 15, 4, 4],
        [4, 4, 2, 2, 2, 2, 4, 2, 3, 15, 4, 4],
        [4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4]];
    }
    if (___level_ == 10) {
      imageNumbers =
        [[4, 4, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4],
        [4, 4, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4],
        [4, 4, 2, 2, 1, 1, 4, 4, 4, 4, 4, 4],
        [4, 4, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4],
        [4, 4, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 2, 2, 4, 4, 4, 4, 4, 4]];
    }
    if (___level_ == 11) {
      imageNumbers =
        [[4, 4, 4, 1, 1, 1, 1, 1, 4, 4, 4, 4],
        [4, 4, 4, 2, 2, 3, 2, 2, 4, 4, 4, 4],
        [4, 4, 4, 13, 14, 12, 14, 11, 4, 4, 4, 4],
        [4, 4, 4, 1, 1, 2, 1, 1, 4, 4, 4, 4],
        [4, 4, 4, 13, 14, 12, 14, 11, 4, 4, 4, 4],
        [4, 4, 4, 1, 2, 2, 1, 1, 4, 4, 4, 4],
        [4, 4, 4, 13, 14, 12, 14, 11, 4, 4, 4, 4],
        [4, 4, 4, 1, 1, 2, 2, 2, 4, 4, 4, 4],
        [4, 4, 4, 13, 14, 12, 14, 11, 4, 4, 4, 4],
        [4, 4, 4, 2, 2, 2, 1, 1, 4, 4, 4, 4],
        [4, 4, 4, 13, 14, 12, 14, 11, 4, 4, 4, 4],
        [4, 4, 4, 1, 1, 2, 2, 1, 4, 4, 4, 4]];
    }
    if (___level_ == 12) {
      imageNumbers =
        [[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 4, 4],
        [4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 4, 4],
        [4, 4, 4, 2, 2, 2, 2, 2, 3, 2, 4, 4],
        [4, 4, 4, 1, 1, 2, 2, 2, 2, 2, 4, 4],
        [4, 4, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4],
        [4, 4, 4, 2, 2, 2, 1, 1, 4, 4, 4, 4],
        [4, 4, 4, 13, 14, 12, 14, 11, 4, 4, 4, 4],
        [4, 4, 4, 1, 1, 2, 2, 1, 4, 4, 4, 4]];
    }
    if (___level_ == 13) {
      imageNumbers =
        [[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        [4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 4, 4],
        [4, 4, 4, 4, 3, 2, 2, 2, 2, 2, 4, 4],
        [4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 4, 4],
        [4, 4, 4, 1, 1, 1, 1, 2, 2, 2, 4, 4],
        [4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 4, 4],
        [4, 4, 4, 4, 4, 2, 2, 2, 2, 2, 4, 4],
        [4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 4, 4],
        [4, 4, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4],
        [4, 4, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4],
        [4, 4, 4, 1, 2, 2, 2, 1, 4, 4, 4, 4],
        [4, 4, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4]];
    }
    console.log("imageNumbers", imageNumbers)
    return imageNumbers
  }
}
async function loadasyncData(___level_) {
  console.log(___level_, Number(___level_));
  async function foo_() {
    var course_ = document.getElementById("NoneCourse").innerText;
    console.log("course____", course_);
    let obj;
    const res = await fetch(`${flaskURL}/returnLevel/${course_}`);
    obj = await res.json();
    console.log(obj);
    console.log(___level_, obj[Number(___level_) - 1], obj[0], "response.length", obj.length);
    return obj;
  }
  async function returndata() {
    const response = await foo_();
    for (let i = 0; i < response.length; i++) {
      console.log("i", i);
      const levelsData = response;
      console.log("___level_", ___level_)
      if (Number(___level_) === i + 1) {  // Adjust index to match level number
        var data__ = levelsData[i];
        console.log(data__);
        return data__;
      }
    }
  }
  async function processData_() {
    const _data__ = await returndata();
    console.log("array", _data__);
    //console.log("nums:", stringTo2DArray(_data_));
    return _data__;
  }
  const processedData = await processData_();
  console.log(processedData)
  return processedData;
}
function next() {
  const _LEVEL___ = document.getElementById("swinglevel").innerText;
  console.log('_LEVEL__ is : ', Number(_LEVEL___) + 1)
  var course_ = document.getElementById("NoneCourse").innerText;
  if (course_ == "") {
    setCookie("Userlevel", Number(_LEVEL___), 765);
  }
  document.getElementById('_(level)_').style.display = 'block';
  document.getElementById('_(login)_').style.display = 'none';
  document.getElementById('_(intoP)_').style.display = 'none';
  document.getElementById("swinglevel").innerText = Number(_LEVEL___) + 1;
  document.getElementById("input-box").innerText = '';
  newround();
}
async function loadlevelandsetUpGame(LEVEL) {
  
  document.getElementById('_(level)_').style.display = 'block';
  document.getElementById('_(login)_').style.display = 'none';
  document.getElementById('_(intoP)_').style.display = 'none';

  document.getElementById("base-timer-label");
  document.getElementById("noneLevel").innerText = LEVEL;

  timerINIT();
  var ____level___ = LEVEL;

  // List of image numbers
  var course_ = document.getElementById("NoneCourse").innerText;
  console.log("____level___ :", ____level___);
  if (course_ == "classic") {
    var imageNumbers = loadLevelData(____level___);
    await o();
  } else {
    var imageNumbers = await loadasyncData(____level___);
  }


  console.log("imageNumbers", imageNumbers);
  // Get the grid container element
  var gridContainer = document.getElementById('myGrid');
  // Create the grid dynamically
  var positions = [];
  let imageIndex = 0;

  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
      // Create a grid item element
      var gridItem = document.createElement('div');
      gridItem.className = 'grid-item';
      // Set the background image based on the image number
      if (imageNumbers[i][j] == 11 || imageNumbers[i][j] == 13) {
        var img = document.createElement('img');
        
        gridItem.style.backgroundImage = `url('golfpngs2/${imageNumbers[i][j]}.gif')`;
      } else {
        gridItem.style.backgroundImage = `url('golfpngs2/${imageNumbers[i][j]}.png')`;
      }
      // Add text element to the grid item
      if (imageNumbers[i][j] === 2) {
        var textElement = document.createElement('p');
        textElement.innerText = `${i + 1}X${j + 1}`;
        gridItem.appendChild(textElement);
      }
      if (imageNumbers[i][j] === 3) {
        var textElement = document.createElement('p');
        answer = i * j;
        console.log(answer)
        document.getElementById("noneANWSER").innerText = answer;
        document.getElementById("what is").innerText = `What is ${i} X ${j}?`
        textElement.innerText = `${i + 1}X${j + 1}`;
        gridItem.appendChild(textElement);
      }
      // Append the grid item to the grid container
      gridContainer.appendChild(gridItem);
      if ((imageNumbers[i][j] === 2) || (imageNumbers[i][j] === 3) || (imageNumbers[i][j] === 12)) {
        var golf = document.getElementById("golfHolder");
        var topgridItem = gridItem.getBoundingClientRect().top + window.screenY;
        var leftgridItem = gridItem.getBoundingClientRect().left + window.screenX;
        var topgolf = golf.getBoundingClientRect().top + window.screenY;
        var leftgolf = golf.getBoundingClientRect().left + window.screenX;
        var top = topgridItem - topgolf;
        var left = leftgridItem - leftgolf;
        textElement.innerText = `${i}X${j}`;
        console.log(gridItem.getBoundingClientRect());
        textElement.setAttribute("id", `${i}X${j}`);
      }
    }
  }
  const ball = document.getElementById("golfHolder");
  const ballX = ball.getBoundingClientRect().left;
  const ballY = ball.getBoundingClientRect().top;
  function moveBallToSquare(x, y, speed) {
    ball.style.transition = `transform ${speed}s linear`;
    ball.style.transform = `translate(${x - ballX}px, ${y - ballY}px)`;
    setTimeout(() => {
      var offsets = document.getElementById('golfHolder').getBoundingClientRect();
      var restet = document.getElementById('golfHolder')
      console.log("top",offsets.top);
      console.log("left",offsets.left);
      restet.style.top = offsets.top;
      restet.style.left = offsets.left;
    },200)
  };
  function moveBall(id, offsetx, offsety, speed_) {
    var square = document.getElementById(id);
    let squareCoords = square.getBoundingClientRect();
    let x = Number(squareCoords.left);
    let y = Number(squareCoords.top);
    moveBallToSquare(x - offsetx, y - offsety, speed_);
  }
  
  //moveBall("11X5",0,0,0.00001)
  
  var wrong_gessus = 0;
  console.log(positions)

  function clearGrid() {
    gridContainer.innerHTML = ""; // Clear the grid by removing all the child elements
  }

}
function timerINIT() {
  function formatTimeLeft(time) {
    // The largest round integer less than or equal to the result of time divided being by 60.
    const minutes = Math.floor(time / 60);

    // Seconds are the remainder of the time divided by 60 (modulus operator)
    let seconds = time % 60;

    // If the value of seconds is less than 10, then display seconds with a leading zero
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    // The output in MM:SS format
    return `${minutes}:${seconds}`;
  }


  const TIME_LIMIT = 20;

  // Initially, no time has passed, but this will count up
  // and subtract from the TIME_LIMIT
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;

    // If the remaining time is less than or equal to 5, remove the "warning" class and apply the "alert" class.
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);

      // If the remaining time is less than or equal to 10, remove the base color and apply the "warning" class.
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  }
  function update() {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTimeLeft(timeLeft);

    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      clearInterval(window.timerInterval);
    }
  }
  var _nextbutton___ = document.getElementById("nextbutton___");
  _nextbutton___.addEventListener("click", () => {
    timePassed = 0;
    timeLeft = 20;
    const COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
    };
    remainingPathColor = COLOR_CODES.info.color;
    document.getElementById("timer").innerHTML = `
    <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="base-timer-path-remaining"
          stroke-dasharray="283"
          class="base-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">
      ${formatTimeLeft(timeLeft)}
    </span>
    </div>
    `;
    clearInterval(window.timerInterval);
    //clearInterval();
    window.timerInterval = setInterval(() => {
      update();
    }, 1000);
  });
  // Warning occurs at 10s
  const WARNING_THRESHOLD = 10;
  // Alert occurs at 5s
  const ALERT_THRESHOLD = 5;

  const COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD
    }
  };

  let remainingPathColor = COLOR_CODES.info.color;

  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;

    // If the remaining time is less than or equal to 5, remove the "warning" class and apply the "alert" class.
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);

      // If the remaining time is less than or equal to 10, remove the base color and apply the "warning" class.
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  }

  document.getElementById("timer").innerHTML = `
  <div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">
    ${formatTimeLeft(timeLeft)}
  </span>
  </div>
  `;
  // Start the timer when the page loads

  let timerInterval = null;

  function startTimer() {
    window.timerInterval = setInterval(() => {
      update();
    }, 1000);
  }

  window.timer = startTimer();

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  let answer = 123456789;

  const FULL_DASH_ARRAY = 283;

  // Update the dasharray value as time passes, starting with 283
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }

}
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function cooookies() {
  setCookie("userlevel", level, 10000000000000)
}
async function newround() {
  document.getElementById("noneLevel").innerText = Number(document.getElementById("noneLevel").innerText) + 1
  let level____ = parseInt(document.getElementById("noneLevel").innerText); // Parse level as an integer
  console.log("newround", level____ - 1);
  var course_ = document.getElementById("NoneCourse").innerText;
  console.log("course_", course_, level____);
  if (course_ == "classic") {
    var imageNumbers = loadLevelData(level____);
    await o();
  } else {
    var imageNumbers = await loadasyncData(level____);
  }

  console.log(typeof (imageNumbers));
  if (typeof (imageNumbers) == (null || undefined || 0)) {
    done();
    console.log("done")
    return ""
  }

  var gridContainer = document.getElementById('myGrid');

  function clearGrid() {
    gridContainer.innerHTML = ""; // Clear the grid by removing all the child elements
  }

  clearGrid();

  //var golfBall = document.getElementById('fly_ball')
  //golfBall.style.animation = '';
  // Create the grid dynamically
  positions = [];

  imageIndex = 0;
  for (let c = 0; c < 12; c++) {
    for (let z = 0; z < 12; z++) {
      // Create a grid item element
      var gridItem_ = document.createElement('div');
      gridItem_.className = 'grid-item';
      // Set the background image based on the image number
      try {
        if (imageNumbers[c][z] == 11 || imageNumbers[c][z] == 13) {
          gridItem_.style.backgroundImage = `url('golfpngs2/${imageNumbers[c][z]}.gif')`;
        } else {
          gridItem_.style.backgroundImage = `url('golfpngs2/${imageNumbers[c][z]}.png')`;
        }
      } catch (error) {
        console.log(error)
        done();
        console.log("done")
        return ""
      }
      // Add text element to the grid item
      if (imageNumbers[c][z] === 2) {
        var textElement_ = document.createElement('p');
        textElement_.innerText = `${c + 1}X${z + 1}`;
        gridItem_.appendChild(textElement_);
      }
      if (imageNumbers[c][z] === 3) {
        var textElement_ = document.createElement('p');
        answer = c * z;
        console.log(answer, `What is ${c} X ${z}?`)
        document.getElementById("noneANWSER").innerText = answer;
        document.getElementById("noneANWSER").style.display = 'none';
        document.getElementById("what is").innerText = `What is ${c} X ${z}?`
        textElement_.innerText = `${c + 1}X${z + 1}`;
        gridItem_.appendChild(textElement_);
      }
      // Append the grid item to the grid container
      gridContainer.appendChild(gridItem_);
      if ((imageNumbers[c][z] === 2) || (imageNumbers[c][z] === 3) || (imageNumbers[c][z] === 12)) {
        var golf = document.getElementById("golfHolder")
        var topgridItem = gridItem_.getBoundingClientRect().top + window.screenY;
        var leftgridItem = gridItem_.getBoundingClientRect().left + window.screenX;
        var topgolf = golf.getBoundingClientRect().top + window.screenY;
        var leftgolf = golf.getBoundingClientRect().left + window.screenX;
        var top = topgridItem - topgolf;
        var left = leftgridItem - leftgolf;
        textElement_.innerText = `${c}X${z}`;
        console.log(gridItem_.getBoundingClientRect());
        textElement_.setAttribute("id", `${c}X${z}`);
      }
    }
  }
}
function Direction(toX, toY, initialX, initialY) {
  const rotated = document.getElementById('fly_ball');
  function calcAngleDegrees(x, y) {
    return (Math.atan2(y, x) * 180) / Math.PI;
  }
  if (initialX == 0 && initialY == 0 && toX == 0) {
    rotated.style.transition = 'transform 0s linear';
    rotated.style.transform = `rotate(-90deg))`;
    return `rotate(-90deg)`; // Default angle when starting from (0, 0)
  }
  const deltaX = toX - initialX;
  const deltaY = toY - initialY;
  const angle = calcAngleDegrees(deltaX, deltaY);
  // Normalize the angle to be within 0 and 360 degrees
  const normalizedAngle = angle

  rotated.style.transition = 'transform 0s linear';
  rotated.style.transform = `rotate(${normalizedAngle}deg)`;
  return normalizedAngle; // Return true or any other value if needed
}
async function swing__() {
  var __course_ = document.getElementById("NoneCourse").innerText;
  console.log("__course_", __course_);
  if (__course_ == "classic") {
    await o();
  }
  var myanswer = document.getElementById("input-box").value;
  document.getElementById("noneANWSER").style.display = 'block';
  console.log(document.getElementById("noneANWSER").innerText, "awnser")
  var awnser__ = document.getElementById("noneANWSER").innerText;
  document.getElementById("input-box").innerText = '';
  document.getElementById("noneANWSER").style.display = 'none';
  var _LEVEL__ = document.getElementById("swinglevel").innerText;
  console.log("swing")
  console.log((myanswer == awnser__))
  const ball = document.getElementById("golfHolder");

  const ballX = ball.getBoundingClientRect().left;
  const ballY = ball.getBoundingClientRect().top;


  function moveBallToSquare(x, y, speed) {
    const ballXnow = ball.getBoundingClientRect().left;
    const ballYnow = ball.getBoundingClientRect().top;
    ball.style.transition = `transform ${speed}s linear`;
    Direction(x, y, ballXnow, ballYnow);
    ball.style.transform = `translate(${x - ballX}px, ${y - ballY}px)`;
  };
  function moveBall(id, offsetx, offsety, speed_) {
    var square = document.getElementById(id);
    let squareCoords = square.getBoundingClientRect();
    let x = Number(squareCoords.left);
    let y = Number(squareCoords.top);
    moveBallToSquare(x - offsetx, y - offsety, speed_);
  }
  function restball(_timeleft) {
    const golfBall = document.getElementById("fly_ball");
    const holder = document.getElementById("golfHolder");
    golfBall.style.animation = 'fadeIn 0.4s';
    setTimeout(() => {
      holder.style.display = "none";
      holder.style.transform = "translate(0px, 0px) rotate(0deg)";
      holder.style.display = "block";
      openDIS(_timeleft);
    }, 400);
  }
  if (myanswer == awnser__) { // Check if the input answer is correct

    var course_ = document.getElementById("NoneCourse").innerText;
    console.log("course_", course_);
    if (course_ == "classic") {
      function classicswing() {
        var _timeleft = document.getElementById('base-timer-label').innerHTML;

        console.log("_LEVEL__", _LEVEL__);
        if (_LEVEL__ == 1) {
          setTimeout(() => {
            moveBall("3X9", 10, 10, 0.5);
            setTimeout(() => {
              restball(_timeleft);
            }, 500);
          }, 400);
          moveBall("2X4", 10, 10, 0.4);
        }
        if (_LEVEL__ == 2) {
          setTimeout(() => {
            moveBall("3X10", 10, 10, 0.5);
            setTimeout(() => {
              moveBall("5X9", 10, 10, 0.5);
              setTimeout(() => {
                restball(_timeleft);
              }, 500);
            }, 500);
          }, 400);
          moveBall("2X6", 10, 10, 0.4);
        }
        if (_LEVEL__ == 3) {
          setTimeout(() => {
            moveBall("4X10", 10, 10, 0.3); // 300ms
            setTimeout(() => {
              moveBall("2X9", -30, 30, 0.325); // 400ms
              setTimeout(() => {
                moveBall("2X1", 20, 10, 0.35); // 500ms
                setTimeout(() => {
                  moveBall("3X2", 0, 0, 0.35); // 600ms
                  setTimeout(() => {
                    moveBall("4X1", 0, 20, 0.5); // 600ms
                    setTimeout(() => {
                      restball(_timeleft); // 600ms
                    }, 500);
                  }, 500);
                }, 400);
              }, 350);
            }, 325);
          }, 300);
          moveBall("5X5", 30, 50, 0.3);
        }
        if (_LEVEL__ == 4) {
          setTimeout(() => {
            moveBall("2X3", 0, 0, 0.5);
            setTimeout(() => {
              moveBall("1X1", 0, 0, 0.5);
              setTimeout(() => {
                moveBall("5X2", 15, 15, 0.5);
                setTimeout(() => {
                  restball(_timeleft);
                }, 500);
              }, 500);
            }, 500);
          }, 400);
          moveBall("1X5", 0, 0, 0.4);
        }
        if (_LEVEL__ == 5) {
          setTimeout(() => {
            restball(_timeleft);
          }, 500);
          moveBall("1X5", 10, 10, 0.5);
        }
        if (_LEVEL__ == 6) {
          setTimeout(() => {
            moveBall("5X5", 10, 10, 0.6);
            setTimeout(() => {
              restball(_timeleft);
            }, 600);
          }, 500);
          moveBall("5X1", 10, 10, 0.5);
        }
        if (_LEVEL__ == 7) {
          setTimeout(() => {
            restball(_timeleft);
          }, 500);
          moveBall("4X4", 0, 0, 0.5);
        }
        if (_LEVEL__ == 8) {
          setTimeout(() => {
            moveBall("4X9", 10, 10, 0.4);
            setTimeout(() => {
              restball(_timeleft);
            }, 400);
          }, 300);
          moveBall("4X5", 40, 40, 0.3);
        }
        if (_LEVEL__ == 9) {
          setTimeout(() => {
            moveBall("1X2", 0, 0, 0.5);
            setTimeout(() => {
              moveBall("1X8", -30, 0, 0.5);
              setTimeout(() => {
                moveBall("4X8", 0, 30, 0.5);
                setTimeout(() => {
                  restball(_timeleft);
                }, 500);
              }, 500);
            }, 500);
          }, 400);
          moveBall("5X5", 0, 0, 0.4);
        }
        if (_LEVEL__ == 10) {
          setTimeout(() => {
            moveBall("1X2", 0, 0, 0.5);
            setTimeout(() => {
              moveBall("1X7", 0, 10, 0.5);
              setTimeout(() => {
                restball(_timeleft);
              }, 501);
            }, 501);
          }, 401);
          moveBall("5X5", 0, 0, 0.4);
        }
        if (_LEVEL__ == 11) {
          setTimeout(() => {
            restball(_timeleft);
          }, 501);
          moveBall("1X5", 0, 0, 0.5);
        }
        if (_LEVEL__ == 12) {
          setTimeout(() => {
            moveBall("6X8", 10, 10, 0.4);
            setTimeout(() => {
              restball(_timeleft);
            }, 401);
          }, 301);
          moveBall("8X5", 20, 20, 0.3);
        }
        if (_LEVEL__ == 12) {
          setTimeout(() => {
            moveBall("6X8", 10, 10, 0.4);
            setTimeout(() => {
              restball(_timeleft);
            }, 401);
          }, 301);
          moveBall("8X5", 20, 20, 0.3);
        }
      }
      classicswing();
    } else {
      var _timeleft = document.getElementById('base-timer-label').innerHTML;
      async function getpoints() {
        let obj;
        const res = await fetch(`${flaskURL}/returnPoints/${course_}`);
        obj = await res.json();
        console.log(obj);
        return obj;
      }

      async function returndata() {
        const response = await getpoints();
        for (let i = 0; i < response.length; i++) {
          var levelsData = response;
          console.log("_LEVEL__", _LEVEL__, i)
          if (i == _LEVEL__ - 1) {
            console.log(i, levelsData);
            var data__ = levelsData[i]; // Store the current level data
            return data__;
          }
        }
      }
      var returndated = await returndata();

      console.log("returndated", returndated)
      eval(returndated); // yes i know :| (EVAL IS BAD but i had to)
    }
  } else {

    document.getElementById("fly_ball").style.display = "block";
    const golfBall = document.getElementById("fly_ball");
    var wrong_gessus_ = document.getElementById("wrong_gessus__").innerHTML;
    var wrong_gessus_ = Number(wrong_gessus_);
    var wrong_gessus = wrong_gessus_ + 1;

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    document.getElementById("wrong_gessus__").innerText = wrong_gessus;
    var course_ = document.getElementById("NoneCourse").innerText;
    console.log("course_", course_);
    if (course_ == "classic") {
      if (_LEVEL__ == 1) {
        if (wrong_gessus == 1) {
          moveBall("4X4", 10, 10, 0.5);
        }
        if (wrong_gessus == 2) {
          moveBall("2X5", 10, 10, 0.8);
        }
        if (wrong_gessus >= 3) {
          var random_boolean = Math.random() < 0.5;
          if (random_boolean) {
            moveBall("4X4", 10, 10, 0.8);
            setTimeout(() => {
              moveBall("2X5", 10, 10, 0.8);
            }, 801);
          }
          else {
            moveBall("4X7", 10, 10, 0.5);
            setTimeout(() => {
              moveBall("2X5", 10, 10, 0.8);
            }, 501);
          }
        }
      }
      if (_LEVEL__ == 2) {
        if (wrong_gessus == 1) {
          moveBall('5X4', 10, 10, 0.5);
          setTimeout(() => {
            moveBall('7X6', 10, 10, 0.8);
          }, 501);
        }
        if (wrong_gessus == 2) {
          moveBall("6X4", 10, 10, 0.5);
          setTimeout(() => {
            moveBall("7X6", 10, 10, 0.8);
          }, 501);
        }

        console.log(wrong_gessus, 'gessus');

        if (wrong_gessus >= 3) {
          function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }

          var random_boolean = getRandomInt(1, 3);

          console.log('ran', random_boolean);

          if (random_boolean == 1) {
            moveBall('6X4', 10, 10, 0.5);
            setTimeout(() => {
              moveBall('7X6', 10, 10, 0.8);
            }, 501);
          }
          else if (random_boolean == 2) {
            moveBall('4X4', 10, 10, 0.4);
            setTimeout(() => {
              moveBall('7X6', 10, 10, 0.7);
            }, 401);
          }
          else if (random_boolean == 3) {
            moveBall('3X4', 10, 10, 0.5);
            setTimeout(() => {
              moveBall('7X6', 10, 10, 0.6);
            }, 501);
          }
        }
      }
      if (_LEVEL__ == 3) {
        golfBall.style.transition = "transform 0.1s linear";
        var random_boolean = Math.random() < 0.5;
        if (random_boolean) {
          moveBall("9X4", 10, 10, 0.3);
          setTimeout(() => {
            moveBall("11X5", 10, 10, 0.4);
          }, 301);
        }
        else {
          moveBall("9X6", 10, 10, 0.3);
          setTimeout(() => {
            moveBall("11X5", 10, 10, 0.4);
          }, 301);
        }
      }
      if (_LEVEL__ == 4) {
        golfBall.style.transition = "transform 0.1s linear";
        var random_boolean = Math.random() < 0.5;
        if (random_boolean) {
          moveBall("9X4", 10, 10, 0.3);
          setTimeout(() => {
            moveBall("11X5", 10, 10, 0.4);
          }, 301);
        }
        else {
          moveBall("9X6", 10, 10, 0.3);
          setTimeout(() => {
            moveBall("11X5", 10, 10, 0.4);
          }, 301);
        }
      }
    } else {
      var course_ = document.getElementById("NoneCourse").innerText;
      var _timeleft = document.getElementById('base-timer-label').innerHTML;
      async function returnIncorrectPoints() {
        let obj;
        const res = await fetch(`${flaskURL}/returnIncorrectPoints/${course_}`);
        obj = await res.json();
        console.log(obj);
        return obj;
      }
      async function returndata() {
        const response = await returnIncorrectPoints();
        for (let i = 0; i < response.length; i++) {
          const levelsData = response;
          if (i == _LEVEL__ - 1) {
            console.log(i);
            var data__ = levelsData[i]; // Store the current level data
            return data__;
          }
        }
      }
      var returndated = await returndata();
      console.log("returndated", returndated)
      eval(returndated);
    }
  }
}
