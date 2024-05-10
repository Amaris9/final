// Creates sprite variable
let player, playButton;
let demonEventWall, eyesEventWall;
let borderWall1, borderWall2, borderWall3, borderWall4;

function setup() {
  // Makes cavas size of window (find way to make canvas match window size)
  createCanvas(windowWidth, windowHeight);

  // Creates player sprite
  player = new Sprite();
  player.width = 50;
  player.height = 50;

  // Creates the sprite that controls the demon event
  demonEventWall = new Sprite(300, 100, 10, 80);
  demonEventWall.color = 0;

  // Creates sprite of eyes event
  eyesEventWall = new Sprite(800, 500, 80, 10);
  eyesEventWall.color = 0;

  // Creates the border walls
  borderWall1 = new Sprite();
  borderWall1.x = -100;
  borderWall1.y = 200;
  borderWall1.w = 2;
  borderWall1.h = 2000;
  borderWall1.collider = "static";
  borderWall1.color = 0;
  borderWall1.layer = -2;

  borderWall2 = new Sprite(900, 1200, 2000, 2, "static");
  borderWall2.layer = -1;
  borderWall2.color = 0;

  borderWall3 = new Sprite(900, -800, 2000, 2, "static");
  borderWall3.color = 0;

  borderWall4 = new Sprite(1900, 200, 2, 2000, "static");
  borderWall4.color = 0;

  //Creates playButton sprite
  playButton = new Sprite(900, 40, 100, 50, "static");

  // Lets the player sprite overlap other sprites and allows later event functions to work
  player.overlaps(demonEventWall, demonEvent);
  player.overlaps(eyesEventWall, eyesEvent);
}

// Removes Play Button when clicked on
function mousePressed() {
  if (playButton.mouse.presses()) {
    playButton.remove();
    fullscreen(true);
    resizeCanvas();
  }
}

function draw() {
  // Makes background black
  background("grey");

  // Allow player to move character left and right when the arrow keys are down
  if (kb.pressing("left")) player.vel.x = -5;
  else if (kb.pressing("right")) player.vel.x = 5;
  else player.vel.x = 0;

  // Allows player to move character up and down when the arrow keys are being pressed
  if (kb.pressing("up")) player.vel.y = -5;
  else if (kb.pressing("down")) player.vel.y = 5;
  else player.vel.y = 0;

  // Makes it so camera follows the player sprite
  camera.x = player.x;
  camera.y = player.y;
}

function demonEvent(player, demonEventWall) {
  // Makes it so the demonEvent Wall disapear when it overlaps with player
  demonEventWall.remove();
  let demon = new Sprite(100, 100, 50, 50, "static");
  demon.overlaps(player);
}

function eyesEvent(player, eyesEventWall) {
  eyesEventWall.remove();
  let eyes = new Sprite(800, 600, 50, 50, "static");
  player.overlaps(eyes);
}
