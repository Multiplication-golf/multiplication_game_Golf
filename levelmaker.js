function restball() {
  moveBall('11X5', 0, 0, 0.001);
  console.log()
}

let scrollDisableCount = 0; // Counter variable to keep track of how many times scrolling has been disabled

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


const ball = document.getElementById("golfHolder");
disableScroll();
function runCourse(pointsList, level) {
  console.log("pointsList: ", typeof (pointsList))

  var run_ = document.getElementById("Run Course");

  // Modify the existing change function to call elav_ with finalStr first
  if (pointsList == undefined || pointsList == [] || pointsList == null) {
    alert("There are no points");
    return "";
  } else if (pointsList.length > 5) {
    alert("There are to many points \n try only five");
    return "";
  } else {
    run_.style['background-color'] = "red";
  }

  var code = []
  var codetoload = []
  if (pointsList.length == 1) {
    code.push(`moveBall('${pointsList[0][0]}',0,0,0.5);`);
    code.push('setTimeout(() => {')
    code.push('  run_.style["background-color"] = "green";');
    code.push('  restball();');
    code.push('},500);')
    codetoload.push(`moveBall('${pointsList[0][0]}',0,0,0.5);`);
    codetoload.push('setTimeout(() => {')
    codetoload.push('  restball(_timeleft);');
    codetoload.push('},500);')
    finalStr = code.join('');
    finaldata = codetoload.join('');
    console.log(code.join(''));
    eval(finalStr);
    level.data_to_send = finaldata;
  }
  if (pointsList.length == 2) {
    code.push(`moveBall('${pointsList[0][0]}',0,0,0.5);`);
    code.push('setTimeout(() => {');
    code.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`);
    code.push('  setTimeout(() => {');
    code.push('    run_.style["background-color"] = "green";');
    code.push('    restball();');
    code.push('  },500);');
    code.push('},500);');
    codetoload.push(`moveBall('${pointsList[0][0]}',0,0,0.5);`);
    codetoload.push('setTimeout(() => {');
    codetoload.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`);
    codetoload.push('  setTimeout(() => {');
    codetoload.push('    restball(_timeleft);');
    codetoload.push('  },500);');
    codetoload.push('},500);');

    finalStr = code.join('');
    finaldata = codetoload.join('');
    console.log(code.join(''));
    eval(finalStr);
    level.data_to_send = finaldata;
  }
  if (pointsList.length == 3) {
    code.push(`moveBall('${pointsList[0][0]}',0,0,0.5);`)
    code.push('setTimeout(() => {')
    code.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`)
    code.push('  setTimeout(() => {')
    code.push(`    moveBall('${pointsList[2][0]}',0,0,0.5);`)
    code.push('    setTimeout(() => {')
    code.push('      run_.style["background-color"] = "green";');
    code.push('      restball();');
    code.push('    },500);')
    code.push('  },500);')
    code.push('},500);')
    codetoload.push(`moveBall('${pointsList[0][0]}',0,0,0.5);`)
    codetoload.push('setTimeout(() => {')
    codetoload.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`)
    codetoload.push('  setTimeout(() => {')
    codetoload.push(`    moveBall('${pointsList[2][0]}',0,0,0.5);`)
    codetoload.push('    setTimeout(() => {')
    codetoload.push('      restball(_timeleft);');
    codetoload.push('    },500);')
    codetoload.push('  },500);')
    codetoload.push('},500);')

    finalStr = code.join('');
    finaldata = codetoload.join('');
    console.log(code.join(''));
    eval(finalStr);
    level.data_to_send = finaldata;
  }
  if (pointsList.length == 4) {
    code.push(`moveBall('${pointsList[0][0]}',0,0,0.5);`)
    code.push('setTimeout(() => {')
    code.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`)
    code.push('  setTimeout(() => {')
    code.push(`    moveBall('${pointsList[2][0]}',0,0,0.5);`)
    code.push('    setTimeout(() => {')
    code.push(`      moveBall('${pointsList[3][0]}',0,0,0.5);`);
    code.push('      setTimeout(() => {')
    code.push('        run_.style["background-color"] = "green";');
    code.push('        restball();');
    code.push('      },500);')
    code.push('    },500);')
    code.push('  },500);')
    code.push('},500);')
    codetoload.push(`moveBall('${pointsList[0][0]}',0,0,0.5);`)
    codetoload.push('setTimeout(() => {')
    codetoload.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`)
    codetoload.push('  setTimeout(() => {')
    codetoload.push(`    moveBall('${pointsList[2][0]}',0,0,0.5);`)
    codetoload.push('    setTimeout(() => {')
    codetoload.push(`      moveBall('${pointsList[3][0]}',0,0,0.5);`);
    codetoload.push('      setTimeout(() => {')
    codetoload.push('        restball(_timeleft);');
    codetoload.push('      },500);')
    codetoload.push('    },500);')
    codetoload.push('  },500);')
    codetoload.push('},500);')

    finalStr = code.join('');
    finaldata = codetoload.join('');
    console.log(code.join(''));
    eval(finalStr);
    level.data_to_send = finaldata;
  }
  if (pointsList.length == 5) {
    code.push(`moveBall('${pointsList[0][0]}',0,0,0.5);`)
    code.push('setTimeout(() => {')
    code.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`)
    code.push('  setTimeout(() => {')
    code.push(`    moveBall('${pointsList[2][0]}',0,0,0.5);`)
    code.push('    setTimeout(() => {')
    code.push(`      moveBall('${pointsList[3][0]}',0,0,0.5);`);
    code.push('      setTimeout(() => {')
    code.push(`        moveBall('${pointsList[4][0]}',0,0,0.5);`);
    code.push('        setTimeout(() => {')
    code.push('          run_.style["background-color"] = "green";');
    code.push('          restball();');
    code.push('        },500);')
    code.push('      },500);')
    code.push('    },500);')
    code.push('  },500);')
    code.push('},500);')
    codetoload.push(`moveBall('${pointsList[0][0]}',0,0,0.5);`)
    codetoload.push('setTimeout(() => {')
    codetoload.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`)
    codetoload.push('  setTimeout(() => {')
    codetoload.push(`    moveBall('${pointsList[2][0]}',0,0,0.5);`)
    codetoload.push('    setTimeout(() => {')
    codetoload.push(`      moveBall('${pointsList[3][0]}',0,0,0.5);`);
    codetoload.push('      setTimeout(() => {')
    codetoload.push(`        moveBall('${pointsList[4][0]}',0,0,0.5);`);
    codetoload.push('        setTimeout(() => {')
    codetoload.push('          restball(_timeleft);');
    codetoload.push('        },500);')
    codetoload.push('      },500);')
    codetoload.push('    },500);')
    codetoload.push('  },500);')
    codetoload.push('},500);')

    finalStr = code.join('');
    finaldata = codetoload.join('');
    console.log(code.join(''));
    eval(finalStr);
    level.data_to_send = finaldata;
  }
  console.log(levels___)
}
function run_as_inncorect_Course(pointsList, level) {
  console.log("pointsList: ", typeof (pointsList))

  var run_ = document.getElementById("Run incorrect Course");

  // Modify the existing change function to call elav_ with finalStr first
  if (pointsList == undefined || pointsList == [] || pointsList == null) {
    alert("There are no points");
    return "";
  } else if (pointsList.length > 3) {
    alert("There are to many incorrect points \n try only three");
    return "";
  } else {
    run_.style['background-color'] = "red";
  }
  var codetoload_ = []
  var code = []
  if (pointsList.length == 1) {
    code.push(`moveBall('${pointsList[0][0]}',0,0,0.5);`);
    code.push('setTimeout(() => {')
    code.push('  run_.style["background-color"] = "green";');
    code.push('  restball();');
    code.push('},500);')
    codetoload_.push(`moveBall('${pointsList[0][0]}',0,0,0.5);`);
    finalStr = code.join('');
    finaldata = codetoload_.join('');
    console.log(code.join(''));
    eval(finalStr);
    level.incorrect_point_data_to_send = finaldata;
  }
  if (pointsList.length == 2) {
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    code.push(`if (${randomNumber}==1) {`)
    code.push(`  moveBall('${pointsList[0][0]}',0,0,0.5);`);
    code.push('  setTimeout(() => {')
    code.push('    run_.style["background-color"] = "green";');
    code.push('    restball();');
    code.push('  },500);')
    code.push("}")
    code.push(`if (${randomNumber}==2) {`)
    code.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`);
    code.push('  setTimeout(() => {')
    code.push('    run_.style["background-color"] = "green";');
    code.push('    restball();');
    code.push('  },500);')
    code.push("}")
    codetoload_.push(`if (random_boolean==1) {`)
    codetoload_.push(`  moveBall('${pointsList[0][0]}',0,0,0.5);`);
    codetoload_.push("}")
    codetoload_.push(`if (random_boolean==2) {`)
    codetoload_.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`);
    codetoload_.push("}")


    finalStr = code.join('');
    finaldata = codetoload_.join('');
    console.log(code.join(''));
    eval(finalStr);
    level.incorrect_point_data_to_send = finaldata;

  }
  if (pointsList.length == 3) {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    code.push(`if (${randomNumber}==1) {`)
    code.push(`  moveBall('${pointsList[0][0]}',0,0,0.5);`);
    code.push('  setTimeout(() => {')
    code.push('    run_.style["background-color"] = "green";');
    code.push('    restball();');
    code.push('  },500);')
    code.push("}")
    code.push(`if (${randomNumber}==2) {`)
    code.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`);
    code.push('  setTimeout(() => {')
    code.push('    run_.style["background-color"] = "green";');
    code.push('    restball();');
    code.push('  },500);')
    code.push("}")
    code.push(`if (${randomNumber}==3) {`)
    code.push(`  moveBall('${pointsList[2][0]}',0,0,0.5);`);
    code.push('  setTimeout(() => {')
    code.push('    run_.style["background-color"] = "green";');
    code.push('    restball();');
    code.push('  },500);')
    code.push("}")
    codetoload_.push(`if (random_boolean==1) {`)
    codetoload_.push(`  moveBall('${pointsList[0][0]}',0,0,0.5);`);
    codetoload_.push("}")
    codetoload_.push(`if (random_boolean==2) {`)
    codetoload_.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`);
    codetoload_.push("}")
    codetoload_.push(`if (random_boolean==3) {`)
    codetoload_.push(`  moveBall('${pointsList[2][0]}',0,0,0.5);`);
    codetoload_.push("}")

    finalStr = code.join('');
    finaldata = codetoload_.join('');
    console.log(code.join(''));
    eval(finalStr);
    level.incorrect_point_data_to_send = finaldata;
  }
  console.log(levels___)
}
const ballX = ball.getBoundingClientRect().left;
const ballY = ball.getBoundingClientRect().top;

const __baselist__ = new Map();

const pointsMap = new Map();

__X__ = []
var resetList = [[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]];

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
class Level_Builder {
  
  constructor(name) {
    this.name = name;
    this.isPointCreationMode = false;
    this.incorrect_point_data_to_send = []
    this.data_to_send = []
    // Add event listener to the Create Point button
    this.basecreate = [0, 0, 255];
    this.inPointNumber_ = 1;
    this.points = 0;
    this._X_ = [];
    this._X_Load = [];
    this.in_X_ = [];
    this.in_X_Load = [];
    this.baselist = [[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]];
    this.resetList = this.baselist;
    this.LevelList = [];
    this.gridContainer = document.getElementById("gridXXX");
    document.getElementById("gridXXX").innerHTML = "";
    this.gridContainer.innerHTML = "";
    this.slected_item = 2;
    this.new = "false";
    this.id = '';

    document.getElementById("noneSlect").innerText = this.slected_item;
    this.divbar = document.getElementById("items bar");
    this.divbar.innerHTML = '';
    for (let i = 1; i < 17; i++) {
      var item = document.createElement("img");
      if (i == 11) {
        item.src = `golfpngs/${i}.gif`;
      } else {
        item.src = `golfpngs/${i}.png`;
      }
      item.className = "itemimg";
      item.addEventListener("click", function() {
        this.slected_item = Number(i);
        document.getElementById("noneSlect").innerText = this.slected_item;
      })
      this.divbar.appendChild(item);
      var br = document.createElement("br");
      this.divbar.appendChild(br);
    }
    for (let i = 1; i < 4; i++) {
      var br = document.createElement("br");
      this.divbar.appendChild(br);
    }
  }


  // Update the click handler for grid items to add points
  loadmesh(text) {
    this.basecreate = [0, 0, 255];
    var gridContainer = this.gridContainer;
    this.imageIndex = 0;
    var basecreate = this.basecreate;
    var that = this;
    for (let a = 0; a < 12; a++) {
      for (let d = 0; d < 12; d++) {
        var baselist = this.baselist;
        const createGridItem = () => {
          var gridItem_ = document.createElement('div');
          gridItem_.className = '_grid-item_';
          // Set the background image based on the image number
          if (baselist[a][d] == 11) {
            gridItem_.style.backgroundImage = `url('golfpngs/${baselist[a][d]}.gif')`;
          } else {
            gridItem_.style.backgroundImage = `url('golfpngs/${baselist[a][d]}.png')`;
          }
          // Add text element to the grid item
          var textElement_ = document.createElement('p');
          textElement_.innerText = `${a + 1}X${d + 1}`;
          if (text) {
            gridItem_.appendChild(textElement_);
          }
          gridItem_.addEventListener("click", () => {
            var _X_ = this._X_;
            var _X_Load = this._X_Load;
            var in_X_ = this.in_X_;
            var in_X_Load = this.in_X_Load;
            var points = this.points;
            var basecreate = this.basecreate;
            var inPointNumber_ = this.inPointNumber_;
            console.log('name: ', this.name);
            var _isPointCorrectCreationMode_ = document.getElementById("NoneCreate").innerText === "true";
            var __isPointCorrectCreationMode_ = document.getElementById("NoneIncreate").innerText === "true";
            console.log(_isPointCorrectCreationMode_, document.getElementById("NoneCreate").innerText)
            if (!_isPointCorrectCreationMode_ && !__isPointCorrectCreationMode_) {
              var slected_item_ = Number(document.getElementById("noneSlect").innerText);
              if (slected_item_ == 11) {
                gridItem_.style.backgroundImage = `url('golfpngs/${slected_item_}.gif')`;
              } else {
                gridItem_.style.backgroundImage = `url('golfpngs/${slected_item_}.png')`;
              }
              baselist[a][d] = slected_item_;
            }
            if (_isPointCorrectCreationMode_ && !__isPointCorrectCreationMode_) {

              var point = document.createElement('div');
              point.className = 'point';
              let squareCoords = gridItem_.getBoundingClientRect();
              let x = Number(squareCoords.left);
              let y = Number(squareCoords.top);
              point.style.left = x + 'px';
              point.style.top = y + 'px';
              console.log(x);
              console.log(y);
              point.style['background-color'] = `rgb(${basecreate[0]},${basecreate[1]},${basecreate[2]})`;
              basecreate[0] = basecreate[0] + 20;
              basecreate[1] = basecreate[1] + 20;
              _X_Load.push([gridItem_.id, points]);
              _X_.push([gridItem_.id, points]);
              this.gridContainer.appendChild(point);
              points++;
            }
            if (!_isPointCorrectCreationMode_ && __isPointCorrectCreationMode_) {
              var point = document.createElement('div');
              point.className = 'InncorrectPoint';
              let squareCoords = gridItem_.getBoundingClientRect();
              let x = Number(squareCoords.left);
              let y = Number(squareCoords.top);
              point.style.left = x + 'px';
              point.style.top = y + 'px';
              console.log(x);
              console.log(y);
              in_X_Load.push([gridItem_.id, points]);
              in_X_.push([gridItem_.id, points]);
              this.gridContainer.appendChild(point);
              var pointTxt = document.createElement('p');
              pointTxt.innerText = inPointNumber_;
              point.appendChild(pointTxt);
              points++;
              inPointNumber_++;
            }
            this.gridContainer = gridContainer;
            this.baselist = baselist;
            this._X_Load = _X_Load;
            this._X_ = _X_;
            this.in_X_Load = in_X_Load;
            this.in_X_ = in_X_;
            console.log("_X_Load", _X_Load);
            this.points = points;
            this.basecreate = basecreate;
            this.inPointNumber_ = inPointNumber_;
          });
          gridContainer.appendChild(gridItem_);
          gridItem_.setAttribute("id", `${a}X${d}`);
        };
        createGridItem();
      }
    }
  }

  clearGridForNewLevel() {
    var gridContainer = this.gridContainer;
    gridContainer.innerHTML = "";
    this._X_Load = [];
    this.in_X_Load = [];
    this.basecreate = [0, 0, 255];
    this.inPointNumber_ = 1;
    this.baselist = this.resetList;
  }
  clearGrid() {
    var gridContainer = this.gridContainer;
    gridContainer.innerHTML = "";
    this.points = 0;
    this._X_ = [];
    this._X_Load = [];
    this.in_X_ = [];
    this.in_X_Load = [];
    this.inPointNumber_ = 1;
    this.basecreate = [0, 0, 255];
    this.baselist = resetList;
  }
  clearText() {
    console.log(gridItems, "clearText -> exe")
    var gridItems = document.querySelectorAll('._grid-item_');
    gridItems.forEach(gridItem => {
      gridItem.innerHTML = ''; // Remove all text content inside the grid item
    });
  }
  clearPoints() {
    var gridItems = document.querySelectorAll('.point');
    console.log(gridItems, "clearPoints_ -> exe")
    gridItems.forEach(gridItem => {
      gridItem.remove(); // Remove all text content inside the grid item
    });
    this.points = 0;
    this._X_ = [];
    this._X_Load = [];
    this.in_X_ = [];
    this.in_X_Load = [];
    this.basecreate = [0, 0, 255];
    this.inPointNumber_ = 1;
  }
  // Add event listener to the Clear Grid button
  clearText() {
    var gridItems = document.querySelectorAll('._grid-item_');
    gridItems.forEach(gridItem => {
      gridItem.innerHTML = ''; // Remove all text content inside the grid item
    });
  }

  saveLevel() {
    console.log("id", this.name);

    __baselist__.set(this.name, this.baselist);
    //this._X_Load = this._X_;

    console.log(JSON.stringify(__baselist__));
  }

  loadpoints() {
    var basecreate = this.basecreate;
    console.log("points", this.points);
    console.log("length of _X_ :", this._X_.length, this._X_);
    for (var h = 0; h < this._X_.length; h++) {
      var which_to_append = this._X_[h][0]
      console.log(this._X_[h][0], this._X_)
      var gridItem__ = document.getElementById(which_to_append);
      var point = document.createElement('div');
      point.className = 'point';
      let squareCoords = gridItem__.getBoundingClientRect();
      let x = Number(squareCoords.left);
      let y = Number(squareCoords.top);
      point.style.left = x + 'px';
      point.style.top = y + 'px';
      console.log(x);
      console.log(y);
      point.style['background-color'] = `rgb(${basecreate[0]},${basecreate[1]},${basecreate[2]})`;
      basecreate[0] = basecreate[0] + 20;
      basecreate[1] = basecreate[1] + 20;
      this.gridContainer.appendChild(point);
    }
    this.basecreate = basecreate
    var inPointNumber_ = this.inPointNumber_;
    console.log("points", this.points);
    console.log("length of _X_ :", this.in_X_.length, this.in_X_);
    for (var h = 0; h < this.in_X_.length; h++) {
      var which_to_append = this.in_X_[h][0]
      console.log(this.in_X_[h][0], this.in_X_)
      var gridItem__ = document.getElementById(which_to_append);
      var point = document.createElement('div');
      point.className = 'InncorrectPoint';
      let squareCoords = gridItem__.getBoundingClientRect();
      let x = Number(squareCoords.left);
      let y = Number(squareCoords.top);
      point.style.left = x + 'px';
      point.style.top = y + 'px';
      console.log(x);
      console.log(y);

      this.gridContainer.appendChild(point);
      var pointTxt = document.createElement('p');
      pointTxt.innerText = h + 1;
      point.appendChild(pointTxt);
      inPointNumber_++;
    }
    this.inPointNumber_ = inPointNumber_;
  }
}

function confermSUB() {
  console.log(JSON.stringify(levels___))
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function confermSUB2() {
  var modal = document.getElementById("myModal2");
  modal.style.display = "block";
}

function getkey(key) {
  return new Promise((resolve, reject) => {

  const url = `https://41245304-a1a2-410d-8aa4-2fb79ed67f93-00-13q9cm7t89rir.picard.replit.dev:8080/loadFromKey/${key}`;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const responseData = JSON.parse(xhr.responseText);
        console.log('Level submitted successfully:', responseData);
        levels___ = responseData;
        document.getElementById("key----").style.display = "none";
        console.log(levels___);
        var gridContainer = document.getElementById("gridXXX");
        gridContainer.innerHTML = "";
        for (let a = 0; a < levels___.length; a++) {
          
        }

        document.getElementById("levelContainer").innerHTML = '';
        
        for (let i = 1; i-1 < levels___.length; i++) {
          var newButton = document.createElement('button');
          var newDiv = document.createElement('div');
          var newText = document.createElement('p');
          newDiv.classList = 'levelBox';
          newText.classList = 'levelBox_P';
          newButton.style = 'padding:1px';
          newText.innerText = `Level ${levels + 1}`;
          newDiv.appendChild(newText);
          newButton.appendChild(newDiv);
          document.getElementById("levelContainer").appendChild(newButton);
          
          newButton.addEventListener("click", () => {
            var lenthOfLevel = document.getElementById("NoneLevel").innerText;

            lastvisted_id = levels___["level" + i].id;
            var levels_loaded = document.querySelectorAll(".paddx");
            levels_loaded.forEach(level => {
              level.style["backgroundColor"] = "white";
            });
            console.log(levels___.length);
            for (let t = 1; t < lenthOfLevel; t++) {
              levels___["level" + t].clearGridForNewLevel();
            }
            newButton.style["backgroundColor"] = "lightgrey";

            console.log(levels___["level" + (i + 1)]);
            console.log(levels___["level" + i].new);
            levels___["level" + i].loadmesh(true);
            levels___["level" + i].loadpoints();

            clearButton.removeEventListener("click", function() { levels___["level" + 1].clearGrid(); levels___["level" + 1].loadmesh(true); });
            clearButton.addEventListener("click", function() { levels___["level" + i].clearGrid(); levels___["level" + i].loadmesh(true); });

            clearTextButton.removeEventListener("click", function() { levels___["level" + 1].clearText(); });
            clearTextButton.addEventListener("click", function() { levels___["level" + i].clearText(); });

            __clearPoints.removeEventListener("click", function() { levels___["level" + 1].clearPoints(); });
            __clearPoints.addEventListener("click", function() { levels___["level" + i].clearPoints(); });

            // Save the edited level here
            console.log(lastvisted_id);
            console.log(lenthOfLevel);
            for (let e = 1; e < lenthOfLevel; e++) {
              console.log(JSON.stringify(levels___["level" + e]));
              levels___["level" + e].saveLevel();
            }
            // Add this line to save the edited level
            levels___["level" + i].saveLevel();

          });
        }
        
      } else {
        console.error('Error submitting level:', xhr.statusText);
        reject(new Error('Failed to submit level'));
      }
    }
  };
  xhr.send();
  });
}

// Close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
function closeModal2() {
  var modal = document.getElementById("myModal2");
  modal.style.display = "none";
}
var sub = document.getElementById("submit--button");
sub.addEventListener('click',() => {
  var name__ = document.getElementById('name_').value;
  var KEY = document.getElementById('KEY__').value;

  submitLevel(name__,levels___,KEY);
})
// Perform the submit action
function submitAction() {
  for (var lev = 0; lev < levels___.length; lev++) {
    var _____LEVEL__ = levels___[Object.keys(levels___)[lev]];
    if (_____LEVEL__.incorrect_point_data_to_send == undefined ||
      _____LEVEL__.incorrect_point_data_to_send == null ||
      _____LEVEL__.incorrect_point_data_to_send == [] ||
      _____LEVEL__.incorrect_point_data_to_send == "") {
      var pointsList = _____LEVEL__.in_X_;
      if (pointsList.length == 3) {
        codetoload_.push(`if (${randomNumber}==1) {`)
        codetoload_.push(`  moveBall('${pointsList[0][0]}',0,0,0.5);`);
        codetoload_.push("}")
        codetoload_.push(`if (${randomNumber}==2) {`)
        codetoload_.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`);
        codetoload_.push("}")
        codetoload_.push(`if (${randomNumber}==3) {`)
        codetoload_.push(`  moveBall('${pointsList[2][0]}',0,0,0.5);`);
        codetoload_.push("}")

        finaldata = codetoload_.join('');
        _____LEVEL__.incorrect_point_data_to_send = finaldata;
      }
      if (pointsList.length == 2) {
        codetoload_.push(`if (${randomNumber}==1) {`)
        codetoload_.push(`  moveBall('${pointsList[0][0]}',0,0,0.5);`);
        codetoload_.push("}")
        codetoload_.push(`if (${randomNumber}==2) {`)
        codetoload_.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`);
        codetoload_.push("}")

        finaldata = codetoload_.join('');
        _____LEVEL__.incorrect_point_data_to_send = finaldata;
      }
      if (pointsList.length == 1) {
        codetoload_.push(`  moveBall('${pointsList[0][0]}',0,0,0.5);`);

        finaldata = codetoload_.join('');
        _____LEVEL__.incorrect_point_data_to_send = finaldata;
      }
    }
    if (_____LEVEL__.data_to_send == undefined ||
      _____LEVEL__.data_to_send == null ||
      _____LEVEL__.data_to_send == [] ||
      _____LEVEL__.data_to_send == "") {
      if (pointsList.length == 1) {
        codetoload.push(`moveBall('${pointsList[0][0]}',0,0,0.5);`);
        codetoload.push('setTimeout(() => {')
        codetoload.push('  restball(_timeleft);');
        codetoload.push('},500);')
        
        finaldata = codetoload.join('');
        _____LEVEL__.data_to_send = finaldata;
      }
      if (pointsList.length == 2) {
        codetoload.push(`moveBall('${pointsList[0][0]}',0,0,0.5);`);
        codetoload.push('setTimeout(() => {');
        codetoload.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`);
        codetoload.push('  setTimeout(() => {');
        codetoload.push('    restball(_timeleft);');
        codetoload.push('  },500);');
        codetoload.push('},500);');

        finaldata = codetoload.join('');
        _____LEVEL__.data_to_send = finaldata;
      }
      if (pointsList.length == 3) {
        codetoload.push(`moveBall('${pointsList[0][0]}',0,0,0.5);`)
        codetoload.push('setTimeout(() => {')
        codetoload.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`)
        codetoload.push('  setTimeout(() => {')
        codetoload.push(`    moveBall('${pointsList[2][0]}',0,0,0.5);`)
        codetoload.push('    setTimeout(() => {')
        codetoload.push('      restball(_timeleft);');
        codetoload.push('    },500);')
        codetoload.push('  },500);')
        codetoload.push('},500);')

        finaldata = codetoload.join('');
        _____LEVEL__.data_to_send = finaldata;
      }
      if (pointsList.length == 4) {
        codetoload.push(`moveBall('${pointsList[0][0]}',0,0,0.5);`)
        codetoload.push('setTimeout(() => {')
        codetoload.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`)
        codetoload.push('  setTimeout(() => {')
        codetoload.push(`    moveBall('${pointsList[2][0]}',0,0,0.5);`)
        codetoload.push('    setTimeout(() => {')
        codetoload.push(`      moveBall('${pointsList[3][0]}',0,0,0.5);`);
        codetoload.push('      setTimeout(() => {')
        codetoload.push('        restball(_timeleft);');
        codetoload.push('      },500);')
        codetoload.push('    },500);')
        codetoload.push('  },500);')
        codetoload.push('},500);')

        finaldata = codetoload.join('');
        _____LEVEL__.data_to_send = finaldata;
      }
      if (pointsList.length == 5) {
        codetoload.push(`moveBall('${pointsList[0][0]}',0,0,0.5);`)
        codetoload.push('setTimeout(() => {')
        codetoload.push(`  moveBall('${pointsList[1][0]}',0,0,0.5);`)
        codetoload.push('  setTimeout(() => {')
        codetoload.push(`    moveBall('${pointsList[2][0]}',0,0,0.5);`)
        codetoload.push('    setTimeout(() => {')
        codetoload.push(`      moveBall('${pointsList[3][0]}',0,0,0.5);`);
        codetoload.push('      setTimeout(() => {')
        codetoload.push(`        moveBall('${pointsList[4][0]}',0,0,0.5);`);
        codetoload.push('        setTimeout(() => {')
        codetoload.push('          restball(_timeleft);');
        codetoload.push('        },500);')
        codetoload.push('      },500);')
        codetoload.push('    },500);')
        codetoload.push('  },500);')
        codetoload.push('},500);')

        finaldata = codetoload.join('');
        _____LEVEL__.data_to_send = finaldata;
      }
    }
  }
  console.log(JSON.stringify(levels___))
  closeModal();
  
  document.getElementById("levelsub").style.display = 'block';
}
function submitAction2() {
  console.log(JSON.stringify(levels___))
  closeModal2();
  document.getElementById("key----").style.display = 'block';
}
async function submitLevel(name, levelData,key) {
  var rawdata = JSON.stringify(levelData); // Serialize levelData to JSON
  return new Promise((resolve, reject) => {
    const encodedData = encodeURIComponent(rawdata);
    const url = `https://41245304-a1a2-410d-8aa4-2fb79ed67f93-00-13q9cm7t89rir.picard.replit.dev:8080/levelSubmit/${encodedData}/${name}/${key}`;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          const responseData = JSON.parse(xhr.responseText);
          console.log('Level submitted successfully:', responseData);
          resolve(responseData);
        } else {
          console.error('Error submitting level:', xhr.statusText);
          reject(new Error('Failed to submit level'));
        }
      }
    };

    xhr.send();
  });
}



var levels = 1;

document.getElementById("NoneLevel").innerText = 1;

var lastvisted_id = 1;
var levels___ = {};

window.onload = function() {

  var clearButton = document.getElementById("clearGridButton");
  clearButton.addEventListener("click", function() {
    levels___["level" + 1].clearGrid();
    levels___["level" + 1].loadmesh(true);
  });
  var clearTextButton = document.getElementById("clear text");
  var addpoint = document.getElementById("create point");
  var __clearPoints = document.getElementById("clearPoints");

  addpoint.addEventListener("click", function() {
    var isPointCreationMode = document.getElementById("NoneCreate").innerText;
    isPointCreationMode = (isPointCreationMode === "true") ? "false" : "true";
    document.getElementById("NoneCreate").innerText = isPointCreationMode;
    if (isPointCreationMode === "true") {
      addpoint.style['background-color'] = "green";
    } else {
      addpoint.style['background-color'] = "red";
    }
  });
  var addincorrectpoint = document.getElementById("Incorrect point");

  addincorrectpoint.addEventListener("click", function() {
    var inisPointCreationMode = document.getElementById("NoneIncreate").innerText;
    inisPointCreationMode = (inisPointCreationMode === "true") ? "false" : "true";
    document.getElementById("NoneIncreate").innerText = inisPointCreationMode;
    if (inisPointCreationMode === "true") {
      addincorrectpoint.style['background-color'] = "green";
    } else {
      addincorrectpoint.style['background-color'] = "red";
    }
  });



  __clearPoints.addEventListener("click", function() { levels___["level" + 1].clearPoints(); });
  clearTextButton.addEventListener("click", function() { levels___["level" + 1].clearText(); });

  var plusButton = document.getElementById("+");
  var levels = 1;

  lastvisted_id = 1;
  levels___["level" + Number(levels)] = new Level_Builder(`Level ${levels}`);
  levels___["level" + levels].loadmesh(true);
  levels___["level" + levels].id = levels;

  plusButton.addEventListener("click", function() {
    levels___["level" + (levels + 1)] = new Level_Builder(`Level ${(levels + 1)}`);
    levels___["level" + (levels + 1)].id = (levels + 1);
    levels___["level" + (levels + 1)].loadmesh(true);
    console.log("resetList", levels___["level" + (levels + 1)].resetList)
    console.log("baselist", levels___["level" + (levels + 1)].baselist)
    console.log(levels___.length, (levels + 1));
    document.getElementById("gridXXX").innerHTML = "";
    var newButton = document.createElement('button');
    var newDiv = document.createElement('div');
    var newText = document.createElement('p');
    newDiv.classList = 'levelBox';
    newText.classList = 'levelBox_P';
    newButton.style = 'padding:1px';
    newText.innerText = `Level ${levels + 1}`;
    console.log(__baselist__);
    var i = levels + 1;
    levels___["level" + i].saveLevel();
    newDiv.appendChild(newText);
    newButton.appendChild(newDiv);
    document.getElementById("levelContainer").appendChild(newButton);
    newButton.addEventListener("click", () => { });
    newButton.style["backgroundColor"] = "lightgrey";
    newButton.classList = 'paddx';

    var lenthOfLevel = document.getElementById("NoneLevel").innerText;

    lastvisted_id = levels___["level" + i].id;
    var levels_loaded = document.querySelectorAll(".paddx");
    levels_loaded.forEach(level => {
      level.style["backgroundColor"] = "white";
    });
    console.log(levels___.length);
    for (let t = 1; t < lenthOfLevel; t++) {
      levels___["level" + t].clearGridForNewLevel();
    }
    newButton.style["backgroundColor"] = "lightgrey";

    console.log(levels___["level" + (i + 1)]);
    console.log(levels___["level" + i].new);
    levels___["level" + i].loadmesh(true);
    levels___["level" + i].loadpoints();

    clearButton.removeEventListener("click", function() { levels___["level" + 1].clearGrid(); levels___["level" + 1].loadmesh(true); });
    clearButton.addEventListener("click", function() { levels___["level" + i].clearGrid(); levels___["level" + i].loadmesh(true); });

    clearTextButton.removeEventListener("click", function() { level1.clearText(); });
    clearTextButton.addEventListener("click", function() { levels___["level" + i].clearText(); });

    __clearPoints.removeEventListener("click", function() { level1.clearPoints(); });
    __clearPoints.addEventListener("click", function() { levels___["level" + i].clearPoints(); });

    // Save the edited level here
    console.log(lastvisted_id);
    console.log(lenthOfLevel);
    for (let e = 1; e < lenthOfLevel; e++) {
      console.log(JSON.stringify(levels___["level" + e]));
      levels___["level" + e].saveLevel();
    }
    // Add this line to save the edited level
    levels___["level" + i].saveLevel();


    newButton.addEventListener("click", () => {
      var lenthOfLevel = document.getElementById("NoneLevel").innerText;

      lastvisted_id = levels___["level" + i].id;
      var levels_loaded = document.querySelectorAll(".paddx");
      levels_loaded.forEach(level => {
        level.style["backgroundColor"] = "white";
      });
      console.log(levels___.length);
      for (let t = 1; t < lenthOfLevel; t++) {
        levels___["level" + t].clearGridForNewLevel();
      }
      newButton.style["backgroundColor"] = "lightgrey";

      console.log(levels___["level" + (i + 1)]);
      console.log(levels___["level" + i].new);
      levels___["level" + i].loadmesh(true);
      levels___["level" + i].loadpoints();

      clearButton.removeEventListener("click", function() { levels___["level" + 1].clearGrid(); levels___["level" + 1].loadmesh(true); });
      clearButton.addEventListener("click", function() { levels___["level" + i].clearGrid(); levels___["level" + i].loadmesh(true); });

      clearTextButton.removeEventListener("click", function() { levels___["level" + 1].clearText(); });
      clearTextButton.addEventListener("click", function() { levels___["level" + i].clearText(); });

      __clearPoints.removeEventListener("click", function() { levels___["level" + 1].clearPoints(); });
      __clearPoints.addEventListener("click", function() { levels___["level" + i].clearPoints(); });

      // Save the edited level here
      console.log(lastvisted_id);
      console.log(lenthOfLevel);
      for (let e = 1; e < lenthOfLevel; e++) {
        console.log(JSON.stringify(levels___["level" + e]));
        levels___["level" + e].saveLevel();
      }
      // Add this line to save the edited level
      levels___["level" + i].saveLevel();

    });

    console.log(levels);
    levels++;
    document.getElementById("NoneLevel").innerText = levels;
  });

  var levels_loaded = document.querySelectorAll(".levelBox")
  console.log(levels_loaded);
  levels_loaded.forEach(level => {
    level.addEventListener("click", () => {
      var lenthOfLevel = document.getElementById("NoneLevel").innerText;
      console.log("lastvisted_id", lastvisted_id)
      console.log("level _ 1")
      lastvisted_id = levels___["level" + 1].id;
      console.log("lastvisted_id", lastvisted_id)
      var levels_loaded = document.querySelectorAll(".paddx");
      levels_loaded.forEach(level => {
        level.style["backgroundColor"] = "white";
      });

      for (let t = 1; t < lenthOfLevel; t++) {
        console.log(levels___["level" + t])
        levels___["level" + t].clearGridForNewLevel();
      }

      levels___["level" + 1].loadmesh(true);
      levels___["level" + 1].loadpoints();

      clearButton.addEventListener("click", function() {
        levels___["level" + 1].clearGrid();
        levels___["level" + 1].loadmesh(true);
      });
      clearButton.removeEventListener("click", function() {
        levels___["level" + i].clearGrid();
        levels___["level" + i].loadmesh(true);
      });



      clearTextButton.addEventListener("click", function() { levels___["level" + 1].clearText(); });
      clearTextButton.removeEventListener("click", function() { levels___["level" + i].clearText(); });

      __clearPoints.addEventListener("click", function() { levels___["level" + 1].clearPoints(); });
      __clearPoints.removeEventListener("click", function() { levels___["level" + i].clearPoints(); });



      // Save the edited level here
      console.log(lastvisted_id);
      console.log(lenthOfLevel);
      for (let e = 1; e < lenthOfLevel; e++) {
        console.log(JSON.stringify(levels___["level" + e]));
        levels___["level" + e].saveLevel();
      }
      console.log(levels___["level" + 1]._X_)

    });
  });

  var run_ = document.getElementById("Run Course");
  console.log(levels___["level" + lastvisted_id]._X_);
  run_.addEventListener("click", () => {
    console.log(lastvisted_id);
    console.log(levels___["level" + lastvisted_id]?._X_);
    runCourse(levels___["level" + lastvisted_id]?._X_, levels___["level" + lastvisted_id]);
  });
  var run_incorrect = document.getElementById("Run incorrect Course");
  console.log(levels___["level" + lastvisted_id].in_X_);
  run_incorrect.addEventListener("click", () => {
    console.log(lastvisted_id);
    console.log(levels___["level" + lastvisted_id]?.in_X_);
    run_as_inncorect_Course(levels___["level" + lastvisted_id]?.in_X_, levels___["level" + lastvisted_id]);
  });
  restball();
}

