var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var score = 0;
var lives = 3;
var ship = new Ship();
var bullets = [];
var obstacles = [];

document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
        ship.x = relativeX - ship.width / 2;
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

function drawBullets() {
    bullets = bullets.filter(e => e.status);

    bullets.forEach(function (bullet) {
        bullet.draw();
        bullet.move();
    })
}

function shoot() {
    let bullet = new Bullet(ship.x + ship.width / 2,ship.y);
    bullets.push(bullet);
}

setInterval(shoot,500);

function addOstacle() {
    let obstacle = new Obstacle();
    obstacles.push(obstacle);
}

setInterval(addOstacle,1000);

function drawObstacles() {
    obstacles = obstacles.filter(e => e.status);
    obstacles.forEach(function (obstacle) {
        obstacle.draw();
        obstacle.move();
    })
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBullets();
    drawObstacles();
    ship.draw();
    drawScore();
    drawLives();
    requestAnimationFrame(draw);
}

draw();