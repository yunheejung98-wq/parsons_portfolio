let outfitColors = [
  // Day 1
  [
    {h: 223, s: 33, b: 34, size: 40}, 
    {h: 231, s: 25, b: 11, size: 60}, 
    {h: 255, s: 50, b: 3, size: 30},
    {h: 300, s: 50, b: 2, size: 40}
  ],
  // Day 2
  [
    {h: 233, s: 7, b: 96, size: 50},
    {h: 340, s: 3, b: 35, size: 30},
    {h: 71, s: 63, b: 53, size: 10},
    {h: 168, s: 44, b: 40, size: 10},
    {h: 322, s: 61, b: 49, size: 10},
    {h: 255, s: 9, b: 17, size: 10},
  ],
    // Day 3
  [
    {h: 41, s: 39, b: 62, size: 10},
    {h: 192, s: 15, b: 81, size: 40},
    {h: 348, s: 68, b: 45, size: 10},
    {h: 192, s: 36, b: 100, size: 10},
    {h: 176, s: 8, b: 82, size: 50},
  ],
    // Day 4
  [
    {h: 252, s: 23, b: 9, size: 30},
    {h: 212, s: 22, b: 30, size: 30},
    {h: 0, s: 75, b: 68, size: 10},
    {h: 225, s: 25, b: 13, size: 30},
    {h: 252, s: 10, b: 19, size: 20},
  ],
];

function setup() {
  // 캔버스 크기를 HTML 영역에 맞게 설정
    let canvas = createCanvas(525, 455); 
    
    // [가장 중요] HTML 파일의 ID와 정확히 일치시켜 연결합니다.
    canvas.parent('data-portrait-canvas');
}

function draw() {
  // Set the colorMode to HSB
  colorMode(HSB, 360, 100, 100); 
  background(0, 0, 0); 

  // Set the loop for the outfitcolor data for "4 days"
  for (let i = 0; i < outfitColors.length; i++) {
    let dayColors = outfitColors[i];

    // Set the loop for the outfitcolor data for "HSB arrays"
    for (let j = 0; j < dayColors.length; j++) {
      let colorData = dayColors[j];
      
      // Map the position of the color data
      // Map the Hue data of the color with the X position
      let xPos = map(colorData.h, 0, 360, 50, width - 50); 
      // Map the Saturation data of the color with the Y position
      let yPos = map(colorData.s, 0, 100, height - 50, 50); 
      
      // Draw the shapes
      fill(colorData.h, colorData.s, colorData.b);
      noStroke();
      
      // Map the size of the color data to the rectSize to visualize the portion of the color spectrum
      let rectSize = map(colorData.size, 10, 60, 10, 60); 
      
      ellipse(xPos, yPos, rectSize, rectSize);

      // to identify each shapes depending on the dates, use strokes to differentiate the shapes
      stroke(0, 0, 100);
      strokeWeight(map(i, 0, 3, 0.5, 2)); // as the day passes, the stroke becomes thicker
      ellipse(xPos, yPos, rectSize + 5, rectSize + 5);
      noStroke();
    }
  }
}