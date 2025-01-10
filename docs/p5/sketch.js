let gifImage;

function setup() {
  createCanvas(800, 600);
  background(220);
  textAlign(CENTER, CENTER);
  textSize(24);
  text('Drag and drop a GIF file here', width / 2, height / 2);

  // Set up file drop functionality
  let dropZone = select('canvas');
  dropZone.drop(handleFile);
}

function draw() {
  background(220);

  // Display the loaded image if available
  if (gifImage) {
    image(gifImage, 0, 0, gifImage.width, gifImage.height);
  }
}

function mousePressed() {
    if (gifImage) {
        gifImage.pause()
    }
}

function handleFile(file) {
  if (file.type === 'image') {
    // Load the image using loadImage
    gifImage = loadImage(file.data) 
  } else {
    console.log('Not an image file!');
    alert('Please drop a valid GIF file.');
  }
}
