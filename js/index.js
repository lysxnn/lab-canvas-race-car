const splashScreen = document.querySelector('.game-intro');

let car;
let bg;
let y = 0;
let x = 220;
let obstacle;

function preload() {
  car = loadImage('../images/car.png');
}

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('../images/road.png');
  const canvas = createCanvas(500, 700);
  canvas.parent('game-board');
}

function draw() {
  background(bg);
  image(car, x, 410, 60, 100);
  // console.log(keyIsDown(RIGHT_ARROW));
  if (keyIsDown(LEFT_ARROW)) {
    x -= 0.5;
  } else if (keyIsDown(RIGHT_ARROW)) {
    x += 0.5;
  }
  // obstacle()
}

// function decayVelocity(vel) {
//   // implement decaying velocities
//   const decay = vel > 0 ? -0.05 : vel < 0 ? 0.05 : 0;
//   vel += decay;
//   const overshootFromTop = vel < 0 && decay < 0;
//   const overshootFromBot = vel > 0 && decay > 0;
//   if (overshootFromTop || overshootFromBot) {
//     return 0;
//   }
//   return vel;
// }

// function keyPressed() {}

class Rectangle {
  constructor(x, y, width, height) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
  }

  draw() {
    let red = color(255, 204, 0);
    fill(red);
    rect(this.x, this.y, this.width, this.height);
  }
}

class Obstacle extends Rectangle {
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}

function startGame() {
  splashScreen.style.display = 'none';
}

