let snake;
let food;
let game;

function setup() {
  let canvas_width = 1200;
  let canvas_height = 800;
  let left_gap = (window.screen.width - canvas_width) / 2;
  let top_gap = 80;
  frameRate(10);

  let cnv = createCanvas(1200, 800);
  cnv.id("game_grid");
  cnv.position(left_gap, top_gap);

  //snake = new Snake(left_gap, top_gap, left_gap + 1200, top_gap + 800);
  //food = new Food();
  game = new Game();
}

function draw() {
  background(10, 10, 25);
  game.update();
  game.show();
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) game.change_direction(1, 0);
  else if (keyCode == LEFT_ARROW) game.change_direction(-1, 0);
  else if (keyCode == UP_ARROW) game.change_direction(0, -1);
  else if (keyCode == DOWN_ARROW) game.change_direction(0, 1);
}
