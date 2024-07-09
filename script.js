const gameArea = document.getElementById('gameArea');
const snake = document.getElementById('snake');
const food = document.getElementById('food');
const scoreboard = document.getElementById('score');

let snakeX = 10;
let snakeY = 10;
let foodX = 5;
let foodY = 5;
let xVelocity = 0;
let yVelocity = 0;
const gridSize = 20;
const tileCount = 20;
let score = 0; // Initialize score

// Update scoreboard display
function updateScoreboard() {
    scoreboard.textContent = score;
}

function gameLoop() {
    snakeX += xVelocity;
    snakeY += yVelocity;

    // Check if snake hits walls
    if (snakeX < 0 || snakeX >= tileCount || snakeY < 0 || snakeY >= tileCount) {
        gameOver();
        return;
    }

    // Check if snake eats food
    if (snakeX === foodX && snakeY === foodY) {
        score++; // Increment score
        updateScoreboard(); // Update scoreboard display
        foodX = Math.floor(Math.random() * tileCount);
        foodY = Math.floor(Math.random() * tileCount);
    }

    snake.style.left = snakeX * gridSize + 'px';
    snake.style.top = snakeY * gridSize + 'px';
    food.style.left = foodX * gridSize + 'px';
    food.style.top = foodY * gridSize + 'px';

    setTimeout(gameLoop, 100);
}

function gameOver() {
    alert('Game Over! Your score: ' + score);
    snakeX = 10;
    snakeY = 10;
    xVelocity = 0;
    yVelocity = 0;
    foodX = 5;
    foodY = 5;
    score = 0; // Reset score
    updateScoreboard(); // Update scoreboard display
}

document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'ArrowUp':
            if (yVelocity === 0) {
                xVelocity = 0;
                yVelocity = -1;
            }
            break;
        case 'ArrowDown':
            if (yVelocity === 0) {
                xVelocity = 0;
                yVelocity = 1;
            }
            break;
        case 'ArrowLeft':
            if (xVelocity === 0) {
                xVelocity = -1;
                yVelocity = 0;
            }
            break;
        case 'ArrowRight':
            if (xVelocity === 0) {
                xVelocity = 1;
                yVelocity = 0;
            }
            break;
    }
});

// Initialize scoreboard
updateScoreboard();

// Start the game loop
gameLoop();