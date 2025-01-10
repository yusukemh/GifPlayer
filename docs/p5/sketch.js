let GIF;

function setup() {
  createCanvas(800, 600);
  background(220);
  textAlign(CENTER, CENTER);
  textSize(24);
  text('Drag and drop a GIF file here', width / 2, height / 2);
  noLoop();

  // Set up file drop functionality
  let dropZone = select('canvas');
  dropZone.drop(handleFile);
}

function draw() {
  background(220);

  // Display the loaded image if available
  if (GIF) {
    image(GIF.img, GIF.x, GIF.y, GIF.width, GIF.height);
    GIF.draw()
  }
}

function mousePressed() {
    if (GIF) {
        // GIF.toggle_state()
        GIF.mousePressed()
    }
    
}

function update(){
    GIF.update()
}

function handleFile(file) {
    background(220);
    if (file.type === 'image') {
        // Load the image using loadImage
        GIF = new GigObj(loadImage(file.data, update), mouseX, mouseY);
        // GIF = new GigObj(file.data, mouseX, mouseY)
        loop();
    } else {
        console.log('Not an image file!');
        alert('Please drop a valid GIF file.');
    }
}
