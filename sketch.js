let rows = 20; // Numero di righe aumentato
let cols = 20; // Numero di colonne aumentato

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(0);
  
  let glyphSize = min(width / (cols * 1.5), height / (rows * 1.5)); // Dimensione del cerchio contenitore del glifo
  let marginX = (width - (cols * glyphSize * 1.5)) / 2; // Centra i glifi orizzontalmente
  let marginY = (height - (rows * glyphSize * 1.5)) / 2; // Centra i glifi verticalmente
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = marginX + j * glyphSize * 1.5 + glyphSize / 2;
      let y = marginY + i * glyphSize * 1.5 + glyphSize / 2;
      drawGlyph(x, y, glyphSize);
    }
  }
}

function drawGlyph(x, y, size) {
  let numCircles = 5; // Numero fisso di cerchi interni
  let colors = ['#FFDD44', '#4DA6FF', '#FF6B6B', '#A1FF99', '#FFC0CB'];
  
  push();
  translate(x, y);
  
  // Seleziona casualmente un colore di sfondo per il cerchio contenitore
  let backgroundColor = color(colors[floor(random(colors.length))]);
  backgroundColor.setAlpha(150); // Imposta un po' di trasparenza
  
  // Disegna il cerchio di contenimento del glifo con il colore di sfondo
  fill(backgroundColor);
  noStroke();
  ellipse(0, 0, size, size);
  
  // Disegna esattamente 5 cerchi interni posizionati casualmente ma sempre entro il perimetro
  for (let i = 0; i < numCircles; i++) {
    let angle = random(TWO_PI); // Angolo casuale per posizione interna
    let distance = random(size * 0.2, (size / 2) - (size * 0.1)); // Distanza variabile dal centro per tenere i cerchi interni
    
    let offsetX = cos(angle) * distance;
    let offsetY = sin(angle) * distance;
    
    let radius = random(size * 0.1, size * 0.25); // Dimensioni variabili per i cerchi interni
    let colorIndex = floor(random(colors.length));
    let col = color(colors[colorIndex]);
    col.setAlpha(180);
    
    fill(col);
    noStroke();
    ellipse(offsetX, offsetY, radius * 2, radius * random(1.5, 2.5)); // Forma variabile (circolare/ellittica)
  }
  
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
