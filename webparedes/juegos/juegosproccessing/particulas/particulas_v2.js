let particles = [];

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  particles.push(new Particle(mouseX, mouseY));
  
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.update();
    p.display();
    if (p.isFinished()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(random(2, 5));
    this.lifespan = 255;
  }
  
  update() {
    this.position.add(this.velocity);
    this.lifespan -= 5;
  }
  
  display() {
    stroke(255, this.lifespan);
    fill(255, this.lifespan);
    ellipse(this.position.x, this.position.y, 12, 12);
  }
  
  isFinished() {
    return this.lifespan < 0;
  }
}
