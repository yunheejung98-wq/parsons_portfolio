function setup() {
  // 캔버스 크기를 HTML 영역에 맞게 설정
    let canvas = createCanvas(525, 455); 
    
    // [가장 중요] HTML 파일의 ID와 정확히 일치시켜 연결합니다.
    canvas.parent('optical-illusion-canvas');
}

function draw() {
  background(102);
  
  // Calculating the framcount for the star component as they expand&shrink in a loop
  let scaleFactor = map(sin(frameCount * 0.05), -1, 1, 0.5, 1.5);
  
  for(let x = 0; x <= width; x += 100){
    for(let y = 0; y <= height; y += 100){
      
      push();
      
      translate(x, y); 
      
      // add an if/else function to make the star component sping except for the one in the (x=200, y=200 position)
      if (x !== 200 || y !== 200) { 
        rotate(frameCount / 30.0); // The Star in the middle doesn't spin&change it's size
      }
      
      // Apply the scaleFactor definition to the star component's radius
      let r1 = 15 * scaleFactor;
      let r2 = 30 * scaleFactor;
      //**********************************************

      fill(255, 204, 0); 
      star(0, 0, r1, r2, 5); // Draw a new star component applying the new definition of the star's radius
      
      pop();
    }
  }
}

// Reference equation of drawing a star shape component. source : p5.js
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
