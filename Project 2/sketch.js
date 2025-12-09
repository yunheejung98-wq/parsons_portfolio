let lines = [];
let colors = [];
let totalLines = 60;
let lineLifetime = 1000; // One line disappears every 1 second
let startTime;

function setup() {
  let canvas = createCanvas(525, 455); 
  // [가장 중요] HTML 파일의 ID와 정확히 일치시켜 연결합니다.
    canvas.parent('abstract-clock-canvas');
  background(0);
  colors = ["#edbba8", "#e66f3c", "#c6b6d5", "#f1d147", "#a4cd98", "#95accb"];
  
  // All 60 lines are connected each other bridged by squares between 2 lines
  let currentX = random(width);
  let currentY = random(height);

  for (let i = 0; i < totalLines; i++) {
    let nextX = random(width);
    let nextY = random(height);
    
    // Define colors of the square : Pick a random color from the color array 
    // Define scales of the square : Pick a certain width and height from the range of rectSize1,2,3
    let rectColor = random(colors);
    let rectSize1 = random(8, 16);
    let rectSize2 = random(24, 32);
    let rectSize3 = random(16, 24);

    // Save the property of the x,y position of the line
    // Also save the color & size of the square at the both end of the the each line
    lines.push({ 
      x1: currentX, 
      y1: currentY, 
      x2: nextX, 
      y2: nextY, 
      color: rectColor,
      size1: rectSize1,
      size2: rectSize2,
      size3: rectSize3
    });

    currentX = nextX;
    currentY = nextY;
  }

  startTime = millis();
}

function draw() {
  background("#e5e1dc");

  let elapsed = millis() - startTime;
  let linesToShow = totalLines - floor(elapsed / lineLifetime);

  if (linesToShow > 0) {
    for (let i = 0; i < linesToShow; i++) {
      let ln = lines[i];

      // 1. Draw the first line
      stroke(200);
      strokeWeight(1);
      line(ln.x1, ln.y1, ln.x2, ln.y2);

      // 2. Draw two squares at the both end of the line 
      fill(ln.color); // use the color range (arry)
      noStroke();
      // Square1. at the end of the line
      rect(ln.x1 - ln.size1 / 2, ln.y1 - ln.size3 / 2, ln.size1, ln.size3);
      // Square2. at the other end of the line
      rect(ln.x2 - ln.size2 / 2, ln.y2 - ln.size3 / 2, ln.size2, ln.size3);
    }
  } else if (linesToShow <= 0 && linesToShow > -0) {
    background("#e5e1dc");
  } else {
    // When all lines are gone, it immediately reset after 0second and 60lines appear on the canvas again
    lines = [];
    let currentX = random(width);
    let currentY = random(height);
  
    for (let i = 0; i < totalLines; i++) {
      let nextX = random(width);
      let nextY = random(height);
      
      let rectColor = random(colors);
      let rectSize1 = random(24, 32);
      let rectSize2 = random(8, 16);
      let rectSize3 = random(16, 24);

      lines.push({ 
        x1: currentX, 
        y1: currentY, 
        x2: nextX, 
        y2: nextY, 
        color: rectColor,
        size1: rectSize1,
        size2: rectSize2,
        size3: rectSize3
      });
      currentX = nextX;
      currentY = nextY;
    }
    startTime = millis();
  }
}