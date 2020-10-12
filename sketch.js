function setup() {
  createCanvas(800,400);
  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "green";

  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);  
  car.velocityX = speed;

  if (wall.x - car.x < wall.width / 2 + car.width / 2)
  {

    car.velocityX = 0;
    var deformation = (0.5*weight * speed * speed) / 22509;

    if (deformation < 180)
    {
      car.shapeColor = color(255,0,0);
    }

    if(deformation > 180 && deformation < 100)
    {
      car.shapeColor = "yellow";
    }

    if(deformation < 100)
    {
      car.shapeColor = "skyblue";
    }

  }
  drawSprites();
}