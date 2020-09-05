class Game {
  constructor() {
    this.food = new Food(100, 100);
    this.snake = new Snake();
    this.score = 0;
  }

  update() {
    this.snake.update();
    if (this.eat()) {
      this.food.update();
    }
  }

  eat() {
    if (this.snake.eat(this.food.x, this.food.y)) {
      this.snake.grow();
      return true;
    }
    return false;
  }

  show() {
    this.snake.show();
    this.food.show();
  }

  change_direction(x, y) {
    if (this.snake.x_speed == 0 && y == 0) {
      this.snake.x_speed = x;
      this.snake.y_speed = y;
    } else if (this.snake.y_speed == 0 && x == 0) {
      this.snake.x_speed = x;
      this.snake.y_speed = y;
    }
  }
}

class Snake {
  constructor() {
    this.snake_body = [];
    this.x_speed = 1;
    this.y_speed = 0;
    this.square_size = 20;

    let start_x = 260;
    let start_y = 260;
    this.snake_body[0] = createVector(start_x, start_y);
    this.snake_body[1] = createVector(start_x, start_y - this.square_size);
    this.snake_body[2] = createVector(start_x, start_y - 2 * this.square_size);
    this.last_spot_x = this.snake_body[2].x;
    this.last_spot_y = this.snake_body[2].y;
  }

  eat(x, y) {
    if (this.snake_body[0].x == x && this.snake_body[0].y == y) return true;
    return false;
  }

  grow() {
    this.snake_body[this.snake_body.length] = createVector(
      this.last_spot_x,
      this.last_spot_y
    );
  }

  update() {
    // update last snake square
    this.last_spot_x = this.snake_body[this.snake_body.length - 1].x;
    this.last_spot_y = this.snake_body[this.snake_body.length - 1].y;

    // shift snake table
    for (let i = this.snake_body.length - 1; i > 0; i--) {
      this.snake_body[i].x = this.snake_body[i - 1].x;
      this.snake_body[i].y = this.snake_body[i - 1].y;
    }
    this.snake_body[0].x += this.x_speed * this.square_size;
    this.snake_body[0].y += this.y_speed * this.square_size;
  }

  show() {
    fill(17, 230, 237);
    for (let i = 0; i < this.snake_body.length; i++) {
      rect(
        this.snake_body[i].x,
        this.snake_body[i].y,
        this.square_size,
        this.square_size
      );
    }
  }
}

class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
  }

  show() {
    fill(196, 8, 61);
    rect(this.x, this.y, this.size, this.size);
  }

  update() {
    let boundry = Math.floor(width / this.size);
    this.x = Math.floor(Math.random() * boundry) * this.size;

    boundry = Math.floor(height / this.size);
    this.y = Math.floor(Math.random() * boundry) * this.size;
  }
}
