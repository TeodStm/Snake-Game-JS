let game;
let font;
let fontsize = 90;
let canvas_height;
let canvas_width;
var square_size = 20;
let end_game = false;
let fps = 10;
let fps_updated = true;

function setup() {
  //canvas_width = 1000;
  //canvas_height = 700;
  canvas_width = Math.floor((window.screen.width / 20) * 0.6) * 20; //20 because of snake and food square pixels
  canvas_height = Math.floor((window.screen.height / 20) * 0.6) * 20; //20 because of snake and food square pixels

  console.log(window.screen.width);
  console.log(window.screen.height);
  let left_gap = (window.screen.width - canvas_width) / 2;
  //let top_gap = 40;
  let top_gap = Math.floor((window.screen.height - canvas_height) / 3);
  frameRate(fps);

  let cnv = createCanvas(canvas_width, canvas_height);
  cnv.id("game_grid");
  cnv.position(left_gap, top_gap);

  // Score settings
  //font = createFont("Georgia", 64);
  //textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);

  game = new Game(left_gap, top_gap);
}

function draw() {
  background(10, 10, 25);
  if (end_game == false) game.update();
  fill(60, 60, 60);
  textAlign(CENTER);
  let score = game.score.toString();

  if (game.score % 15 == 0 && game.score != 0 && fps_updated == false) {
    fps_updated = true;
    fps += 2;
    frameRate(fps);
  } else if (game.score % 15 != 0) fps_updated = false;
  text(score, canvas_width / 2, canvas_height / 2);
  game.show();

  if (game.lose_game()) {
    end_game = true;
  }
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW || keyCode == 68) game.change_direction(1, 0);
  else if (keyCode == LEFT_ARROW || keyCode == 65) game.change_direction(-1, 0);
  else if (keyCode == UP_ARROW || keyCode == 87) game.change_direction(0, -1);
  else if (keyCode == DOWN_ARROW || keyCode == 83) game.change_direction(0, 1);
}
