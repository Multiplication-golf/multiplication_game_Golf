

const flaskURL = "https://coderyoucantknow.pythonanywhere.com";

window.onload = function() {
  const clubElem1 = document.getElementById("club");
  const clubElem2 = document.getElementById("bar");
  const clubElem3 = document.getElementById("handle");
  const clubElem4 = document.getElementById("crosspeice");
  console.log(getCookie('Moneyscore'));
  var value;
  var value2;
  var value3;
  var value4;

  var rgbs = { 'red': [255, 0, 0], 'orange': [255, 146, 0], 'yellow': [255, 255, 0], 'green': [0, 128, 0], 'blue': [0, 0, 255], 'crayon':[0, 243, 247], 'purple': [75, 0, 130], 'pink': [238, 130, 238]};

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
  const open = document.getElementById("open");
  const open2 = document.getElementById("open2");
  const open3 = document.getElementById("open3");
  const open4 = document.getElementById("open4");
  const decopen = document.getElementById("decopen");
  const decopen2 = document.getElementById("decopen2");
  const decopen3 = document.getElementById("decopen3");
  const decopen4 = document.getElementById("decopen4");
  const colors = document.getElementsByClassName("colordiv");
  const savebutton = document.getElementById("save");
  savebutton.addEventListener('click', () => {
    const loading = document.createElement("img")
    loading.src = 'loading.gif';
    loading.style.display = 'block';
    loading.classList.add("imgload");
    console.log("clicked");
    document.body.appendChild(loading);
    document.getElementById('darkness').style.display = 'block';
    var value = open.innerHTML.replace('Club', '').replace('<br>', '');
    var value2 = open2.innerHTML.replace('Handle', '').replace('<br>', '');
    var value3 = open3.innerHTML.replace('Cross piece', '').replace('<br>', '');
    var value4 = open4.innerHTML.replace('Bar', '').replace('<br>', '');
    console.log(value, value2, value3, value4)
    setCookie("club", value, 756);
    setCookie("handle", value2, 756);
    setCookie("cross piece", value3, 756);
    setCookie("bar", value4, 756);
    var value1_ = value.match(/<p[^>]*>([^<]+)<\/p>/)[1];
    var value2_ = value2.match(/<p[^>]*>([^<]+)<\/p>/)[1];
    var value3_ = value3.match(/<p[^>]*>([^<]+)<\/p>/)[1];
    var value4_ = value4.match(/<p[^>]*>([^<]+)<\/p>/)[1];
    console.log(value1_,value2_,value3_,value4_,)
    var xhr = new XMLHttpRequest();
    var name = getCookie("Name");
    alert(name)
    xhr.open('GET', `${flaskURL}/UpdateCARD/${name}/${value1_}/${value2_}/${value3_}/${value4_}`, true);

    xhr.onload = function() {
      if (xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
      } else {
        console.error('Request failed');
      }
    };
    xhr.send()




    setTimeout(() => {
      loading.remove()
      document.getElementById('darkness').style.display = 'none';
    }, 3500);
  });

  if (getCookie('club') != '' && getCookie('club') != undefined && getCookie('club') != null && getCookie('club') != 'undefined') {
    var club = getCookie('club');
    open.innerHTML = "Club<br>" + club;
    console.log(club);
    // Extract text content using regular expressions
    const matchResult = club.match(/<p[^>]*>([^<]+)<\/p>/);
    const textContent = matchResult ? matchResult[1] : '';

    changeImageColor(clubElem1, rgbs[textContent]);
  }
  if (getCookie('handle') != '' && getCookie('handle') != undefined && getCookie('handle') != null) {
    var handle = getCookie('handle');
    open2.innerHTML = "Handle<br>" + handle;
    console.log(handle);
    // Extract text content using regular expressions
    const matchResult = handle.match(/<p[^>]*>([^<]+)<\/p>/);
    const textContent = matchResult ? matchResult[1] : '';
    console.log(matchResult);
    changeImageColor(clubElem2, rgbs[textContent]);
  }
  if (getCookie('cross piece') != '' && getCookie('cross piece') != undefined && getCookie('cross piece') != null && getCookie('cross piece') != 'undefined') {
    var cross = getCookie('cross piece');
    open3.innerHTML = "Cross piece<br>" + cross;
    console.log(cross);
    // Extract text content using regular expressions
    const matchResult = cross.match(/<p[^>]*>([^<]+)<\/p>/);
    const textContent = matchResult ? matchResult[1] : '';
    console.log(matchResult);
    changeImageColor(clubElem3, rgbs[textContent]);
  }
  if (getCookie('bar') != '' && getCookie('bar') != undefined && getCookie('bar') != null && getCookie('bar') != 'undefined') {
    var bar = getCookie('bar');
    open4.innerHTML = "Bar<br>" + bar;
    console.log(bar);
    // Extract text content using regular expressions
    const matchResult = bar.match(/<p[^>]*>([^<]+)<\/p>/);
    const textContent = matchResult ? matchResult[1] : '';
    console.log(matchResult);
    changeImageColor(clubElem4, rgbs[textContent]);
  }


  $(document).ready(function() {
    $('#open').click(function(e) {
      e.stopPropagation();
      $('#maindrop').toggle();
    });

    $(document).click(function(e) {
      if (!$(e.target).closest('#meun1').length) {
        $('#maindrop').hide();
      }
    });
  });
  $(document).ready(function() {
    $('#open2').click(function(e) {
      e.stopPropagation();
      $('#maindrop2').toggle();
    });

    $(document).click(function(e) {
      if (!$(e.target).closest('#meun2').length) {
        $('#maindrop2').hide();
      }
    });
  });
  $(document).ready(function() {
    $('#open3').click(function(e) {
      e.stopPropagation();
      $('#maindrop3').toggle();
    });

    $(document).click(function(e) {
      if (!$(e.target).closest('#meun3').length) {
        $('#maindrop3').hide();
      }
    });
  });
  $(document).ready(function() {
    $('#open4').click(function(e) {
      e.stopPropagation();
      $('#maindrop4').toggle();
    });

    $(document).click(function(e) {
      if (!$(e.target).closest('#meun4').length) {
        $('#maindrop4').hide();
      }
    });
  });
  $(document).ready(function() {
    $('#decopen').click(function(e) {
      e.stopPropagation();
      $('#decmaindrop').toggle();
    });

    $(document).click(function(e) {
      if (!$(e.target).closest('#decmeun1').length) {
        $('#decmaindrop').hide();
      }
    });
  });
  $(document).ready(function() {
    $('#decopen2').click(function(e) {
      e.stopPropagation();
      $('#decmaindrop2').toggle();
    });

    $(document).click(function(e) {
      if (!$(e.target).closest('#decmeun2').length) {
        $('#decmaindrop2').hide();
      }
    });
  });
  $(document).ready(function() {
    $('#decopen3').click(function(e) {
      e.stopPropagation();
      $('#decmaindrop3').toggle();
    });

    $(document).click(function(e) {
      if (!$(e.target).closest('#decmeun3').length) {
        $('#decmaindrop3').hide();
      }
    });
  });
  $(document).ready(function() {
    $('#decopen4').click(function(e) {
      e.stopPropagation();
      $('#decmaindrop4').toggle();
    });

    $(document).click(function(e) {
      if (!$(e.target).closest('#decmeun4').length) {
        $('#decmaindrop4').hide();
      }
    });
  });


  var main = document.getElementById("maindrop")

  var rgbsKEYS = Object.keys(rgbs)
  for (let i = 0; i < 8; i++) {
    const wapper = document.createElement('div');
    const coloredDiv = document.createElement('div');
    coloredDiv.classList.add('colordiv');
    coloredDiv.classList.add(rgbsKEYS[i]);

    const centeredText = document.createElement('p');
    centeredText.className = 'vcenter';
    centeredText.textContent = rgbsKEYS[i];

    coloredDiv.appendChild(centeredText);
    coloredDiv.addEventListener('click', () => {
      changeImageColor(clubElem1, rgbs[rgbsKEYS[i]]);

      value = wapper.innerHTML;
      console.log(value);
      // Update to get the color text correctly
      open.innerHTML = "Club<br>" + value;  // Update the main button text
      $('#maindrop').hide();  // Close the dropdown menu after selection

    });
    wapper.appendChild(coloredDiv);
    main.appendChild(wapper);
  }
  var main2 = document.getElementById("maindrop2")

  var rgbsKEYS = Object.keys(rgbs)
  for (let i = 0; i < 8; i++) {
    const wapper = document.createElement('div');
    const coloredDiv = document.createElement('div');
    coloredDiv.classList.add('colordiv');
    coloredDiv.classList.add(rgbsKEYS[i]);

    const centeredText = document.createElement('p');
    centeredText.className = 'vcenter';
    centeredText.textContent = rgbsKEYS[i];

    coloredDiv.appendChild(centeredText);
    coloredDiv.addEventListener('click', () => {
      changeImageColor(clubElem2, rgbs[rgbsKEYS[i]]);

      value2 = wapper.innerHTML; // Update to get the color text correctly
      open2.innerHTML = "Handle<br>" + value2; // Update the main button text
      $('#maindrop2').hide();  // Close the dropdown menu after selection

    });
    wapper.appendChild(coloredDiv);
    main2.appendChild(wapper);
  }
  var main3 = document.getElementById("maindrop3")

  var rgbsKEYS = Object.keys(rgbs)
  for (let i = 0; i < 8; i++) {
    const wapper = document.createElement('div');
    const coloredDiv = document.createElement('div');
    coloredDiv.classList.add('colordiv');
    coloredDiv.classList.add(rgbsKEYS[i]);

    const centeredText = document.createElement('p');
    centeredText.className = 'vcenter';
    centeredText.textContent = rgbsKEYS[i];

    coloredDiv.appendChild(centeredText);
    coloredDiv.addEventListener('click', () => {
      changeImageColor(clubElem3, rgbs[rgbsKEYS[i]]);

      value3 = wapper.innerHTML; // Update to get the color text correctly
      open3.innerHTML = "Cross piece<br>" + value3; // Update the main button text
      $('#maindrop3').hide();  // Close the dropdown menu after selection

    });
    wapper.appendChild(coloredDiv);
    main3.appendChild(wapper);
  }
  var main4 = document.getElementById("maindrop4")

  var rgbsKEYS = Object.keys(rgbs)
  for (let i = 0; i < 8; i++) {
    const wapper = document.createElement('div');
    const coloredDiv = document.createElement('div');
    coloredDiv.classList.add('colordiv');
    coloredDiv.classList.add(rgbsKEYS[i]);

    const centeredText = document.createElement('p');
    centeredText.className = 'vcenter';
    centeredText.textContent = rgbsKEYS[i];

    coloredDiv.appendChild(centeredText);
    coloredDiv.addEventListener('click', () => {
      changeImageColor(clubElem4, rgbs[rgbsKEYS[i]]);

      value4 = wapper.innerHTML; // Update to get the color text correctly
      open4.innerHTML = "Bar<br>" + value4; // Update the main button text
      $('#maindrop4').hide(); // Close the dropdown menu after selection

    });
    wapper.appendChild(coloredDiv);
    main4.appendChild(wapper);
  }
  function addDec(PNGid) {
    var decor = document.createElement("img");
    decor.src = PNGid;
    decor.classList = 'golf-img';
    document.body.appendChild(decor)
  }

  var imgvalue1;
  var decmain = document.getElementById("decmaindrop")
  for (let i = 0; i < 2; i = i+2) {
    const wapper = document.createElement('div');
    const imgDiv = document.createElement('img');
    console.log(`dec/club/${i+2}.png`)
    imgDiv.src = `dec/club/croped/${i+2}.png`;
    imgDiv.className = 'smallimg';

    
    imgDiv.addEventListener('click', () => {
      console.log("Click")
      addDec(`dec/club/${i+2}.png`);

      imgvalue1 = wapper.innerHTML;
      imgvalue1.className = 'smallimg';
      // Update to get the color text correctly
      decopen.innerHTML = "Club decore<br>" + imgvalue1; // Update the main button text
      $('#decmaindrop').hide(); // Close the dropdown menu after selection
    });
    wapper.appendChild(imgDiv);
    decmain.appendChild(wapper);
  }
  var imgvalue2;
  var decmain = document.getElementById("decmaindrop2")
  for (let i = 0; i < 2; i = i+2) {
    const wapper = document.createElement('div');
    const imgDiv = document.createElement('img');
    console.log(`dec/handle/${i+8}.png`)
    imgDiv.src = `dec/handle/croped/${i+8}.png`;
    imgDiv.className = 'smallimg';


    imgDiv.addEventListener('click', () => {
      console.log("Click")
      addDec(`dec/handle/${i+8}.png`);

      imgvalue2 = wapper.innerHTML;
      imgvalue2.className = 'smallimg';
      // Update to get the color text correctly
      decopen2.innerHTML = "Handle decore<br>" + imgvalue2; // Update the main button text
      $('#decmaindrop2').hide(); // Close the dropdown menu after selection
    });
    wapper.appendChild(imgDiv);
    decmain.appendChild(wapper);
  }
  var imgvalue3;
  var decmain = document.getElementById("decmaindrop3")
  for (let i = 0; i < 2; i = i+2) {
    const wapper = document.createElement('div');
    const imgDiv = document.createElement('img');
    console.log(`dec/crosspiece/${i+4}.png`)
    imgDiv.src = `dec/crosspiece/croped/${i+4}.png`;
    imgDiv.className = 'smallimg';


    imgDiv.addEventListener('click', () => {
      console.log("Click")
      addDec(`dec/crosspiece/${i+4}.png`);

      imgvalue3 = wapper.innerHTML;
      imgvalue3.className = 'smallimg';
      // Update to get the color text correctly
      decopen3.innerHTML = "crosspiece decore<br>" + imgvalue3; // Update the main button text
      $('#decmaindrop3').hide(); // Close the dropdown menu after selection
    });
    wapper.appendChild(imgDiv);
    decmain.appendChild(wapper);
  }
  var imgvalue4;
  var decmain = document.getElementById("decmaindrop4")
  for (let i = 0; i < 2; i = i+2) {
    const wapper = document.createElement('div');
    const imgDiv = document.createElement('img');
    console.log(`dec/bar/${i+6}.png`)
    imgDiv.src = `dec/bar/croped/${i+6}.png`;
    imgDiv.className = 'smallimg';


    imgDiv.addEventListener('click', () => {
      console.log("Click")
      addDec(`dec/bar/${i+6}.png`);

      imgvalue4 = wapper.innerHTML;
      imgvalue4.className = 'smallimg';
      // Update to get the color text correctly
      decopen4.innerHTML = "Bar decore<br>" + imgvalue4; // Update the main button text
      $('#decmaindrop4').hide(); // Close the dropdown menu after selection
    });
    wapper.appendChild(imgDiv);
    decmain.appendChild(wapper);
  }



  function getRandomColor() {
    return Math.floor(Math.random() * 7);
  }


  function changeImageColor(imageElement, color) {
    console.log(imageElement)
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = imageElement.width;
    canvas.height = imageElement.height;
    ctx.drawImage(imageElement, 0, 0, canvas.width, canvas.height);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    console.log(imageElement, color)

    for (let i = 0; i < data.length; i += 4) {
      // Skip transparent pixels
      if (data[i + 3] === 0) { continue };
      // Change color of non-transparent pixels
      data[i] = color[0];     // Red
      data[i + 1] = color[1]; // Green
      data[i + 2] = color[2]; // Blue
    }
    ctx.putImageData(imageData, 0, 0);
    imageElement.src = canvas.toDataURL();



  }
  // Usage

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


}
