particles = []; 

 function setup() { 
  // 캔버스 크기를 HTML 영역에 맞게 설정
    let canvas = createCanvas(525, 455); 
    
    // [가장 중요] HTML 파일의 ID와 정확히 일치시켜 연결합니다.
    canvas.parent('face-generator-canvas');
 } 

 function draw() { 
   background('#000000'); 

   // create new fire particles every second using push fuction
   for (let i = 0; i < 5; i++) {
     let p = new Particle(); 
     particles.push(p); 
   } 

   // make fire particles disappear when they reach to a certain length
   for (let i = particles.length - 1; i >= 0; i--) { 
     particles[i].update(); 
     particles[i].show(); 
     if (particles[i].finished()) { 
       particles.splice(i, 1); 
     } 
   }
   
  fill('#fffff'); 
  noStroke();
  circle(180, 380, 10);
  circle(220, 380, 10);
   
  let x = constrain(mouseX, 172, 188);
  let y = constrain(mouseY, 380, 372);
  stroke(0);
  strokeWeight(10);
  point(x, y);
   
  let x2 = constrain(mouseX, 212, 228);
  let y2 = constrain(mouseY, 380, 372);
  stroke(0);
  strokeWeight(10);
  point(x2, y2);
   
 } 

 // mousePressed() function added
 function mousePressed() {
   for (let p of particles) {
     p.changeDirection(mouseX, mouseY);
   }
 }

 class Particle { 
   constructor() { 
     this.x = random(160, 240); 
     this.y = 400; 
     this.vx = random(-1, 1); 
     this.vy = random(-5, -1); 
     this.alpha = 255; 
     this.d = 16; 
   } 

   finished() { 
     return this.alpha < 0; 
   } 

   update() { 
     this.x += this.vx; 
     this.y += this.vy; 
     this.alpha -= 3; 
     this.d -= random(0.05, 0.1); 
   } 

   show() { 
     noStroke(); 
     fill(random(255,141), random(141, 206), random(196, 255), this.alpha); 
     ellipse(this.x, this.y, this.d); 
   } 

   // change the direction of the fire particles
   changeDirection(targetX, targetY) {
     let angle = atan2(targetY - this.y, targetX - this.x);
     let speed = random(3, 7);
     this.vx = cos(angle) * speed;
     this.vy = sin(angle) * speed;
   }
} 