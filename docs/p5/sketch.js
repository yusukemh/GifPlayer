let GIF;
let LAK;//left arrow key
let RAK;
let SPC;

// function preload(){
//     icon_play = loadImage('icons8-play-50.png')
// }

function setup() {
  createCanvas(800, 600);
  background(220);
  textAlign(CENTER, CENTER);
  textSize(24);
  text('Drag and drop a GIF file here', width / 2, height / 2);
  noLoop();
  LAK = new LeftArrowKey(hold_patience=30);
  RAK = new RightArrowKey(hold_patience=30);
  SPC = new SpaceKey(hold_patience=0);

  // Set up file drop functionality
  let dropZone = select('canvas');
  dropZone.drop(handleFile);
}

function draw() {
  background(220);

  // Display the loaded image if available
  if (GIF) {
    // image(GIF.img, GIF.x, GIF.y, GIF.width * 2, GIF.height * 2);
    image(GIF.img, GIF.x, GIF.y, GIF.display_width, GIF.display_height);
    GIF.update()
    // console.log(GIF.img.getCurrentFrame())
  }

  RAK.update();
  LAK.update();

  if (RAK.isHeldDown() && RAK.curr_patience % 5 == 0){
    GIF.forward()
  }

  if (LAK.isHeldDown() && LAK.curr_patience % 5 == 0){
    GIF.backward()
  }
}

function keyPressed(){
    if (keyCode === RIGHT_ARROW){
        GIF.forward()
    } else if (keyCode === LEFT_ARROW) {
        GIF.backward()
    } else if (keyCode === 32) {
        GIF.toggle_state()
    }

    return false;// prevent auto-scroll when pressing SPACE
}

function mousePressed() {
    if (GIF) {
        GIF.mousePressed()
    }
}

function keyReleased() {
    //reset the patiences for keys
    RAK.keyReleased();
    LAK.keyReleased();
}

function reinitialize_GIF(){
    GIF.reinitialize_GIF()
}

function handleFile(file) {
    background(220);
    if (file.type === 'image') {
        // Load the image using loadImage
        GIF = new GigObj(loadImage(file.data, reinitialize_GIF), 0, 0);
        loop();
    } else {
        console.log('Not an image file!');
        alert('Please drop a valid GIF file.');
    }
}
