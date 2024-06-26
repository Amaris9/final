// I used p5 plat to create my game. I learned how to use p5 to create
// sprites and how to control those sprites. Every sprite in the game needed
// it's own variable, and the movement controls use conditional logic. I used
// parameters in order to make it so that when the player interacted with one
// sprite it would effect another. I didn't have time to get as far with
// the game as I wanted, but it's a good starting point, and I'm looking forward
// to working in it further, even after class is over.

// Creates sprite variable
let player, playButton;
let demonEventWall, eyesEventWall;
let borderWall1, borderWall2, borderWall3, borderWall4;

function setup() {
  // Makes cavas size of window (find way to make canvas match window size)
  createCanvas(windowWidth, windowHeight);

  // Creates player sprite
  player = new Sprite();
  player.layer = 5;
  player.image = "assets/player_front.png";
  player.image.scale = 0.7;

  // Creates the sprite that controls the demon event
  demonEventWall = new Sprite(300, 100, 10, 100);
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
  borderWall3.layer = -1;

  borderWall4 = new Sprite(1900, 200, 2, 2000, "static");
  borderWall4.color = 0;
  borderWall4.layer = -1;

  //Creates playButton sprite
  playButton = new Sprite();
  playButton.collider = "static";
  playButton.image = "assets/play_button.png";
  playButton.image.scale = 0.1;

  // Lets the player sprite overlap other sprites and allows later event functions to work
  player.overlaps(demonEventWall, demonEvent);
  player.overlaps(eyesEventWall, eyesEvent);
}

function mousePressed() {
  console.log(playButton);
  if (playButton.mouse.presses()) {
    // Removes Play Button when clicked on
    playButton.remove();
    // Makes the game go fullscreen
    fullscreen(true);
    // Resizes the canvas to the width and height of the display
    resizeCanvas(displayWidth, displayHeight);
  }
}

function draw() {
  // Makes background black
  background(50);

  // Allow player to move character left and right when the arrow keys are down
  if (kb.pressing("left")) {
    player.vel.x = -5;
    player.image = "assets/player_side.png";
    player.image.scale = 0.7;
  } else if (kb.pressing("right")) {
    player.vel.x = 5;
    player.image = "assets/player_side2.png";
    player.image.scale = 0.7;
  } else {
    player.vel.x = 0;
    // player.image = "assets/player_front.png";
    // player.image.scale = 0.7;
  }

  // Allows player to move character up and down when the arrow keys are being pressed
  if (kb.pressing("up")) {
    player.vel.y = -5;
    player.image = "assets/player_front.png";
  } else if (kb.pressing("down")) {
    player.vel.y = 5;
    player.image = "assets/player_front.png";
  } else player.vel.y = 0;

  // Makes it so camera follows the player sprite
  camera.x = player.x;
  camera.y = player.y;
}

function demonEvent(player, demonEventWall) {
  // Makes it so the demonEvent Wall disapear when it overlaps with player
  demonEventWall.remove();
  // Creates demon sprite
  let demon = new Sprite();
  demon.y = 300;
  demon.x = 220;
  demon.image = "assets/demon.png";
  demon.image.scale = 2;

  // Lets demon sprite overlap player sprite
  demon.overlaps(player);
}

function eyesEvent(player, eyesEventWall) {
  // Deletes eyeEventWall sprite when it collides with player
  eyesEventWall.remove();
  // Creates eyes sprite
  let eyes = new Sprite(800, 600, 50, 50, "static");
  eyes.y = 900;
  eyes.x = 1000;
  eyes.layer = 2;
  eyes.image = "assets/eyes.png";
  eyes.image.scale = 0.5;
  // Lets player sprite overlap eyes sprite
  player.overlaps(eyes);
}
