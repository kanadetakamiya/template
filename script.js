const canvas = document.getElementById("main");
const context = canvas.getContext("2d");

//vẽ background (60 x 40)
function drawBackground() {
  context.fillStyle = "black";
  context.fillRect(0, 0, 600, 400);
}

//kích thước ô
const CELL_SIZE = 10;

//khởi tạo rắn
const snake = [
  [5, 3],
  [4, 3],
  [3, 3],
];

//hướng mặc định của rắn (0: right, 1: down, 2: left, 3: up)
let direction = 0;

//vị trí mặc định của mồi
const food = [10, 10];

//vẽ mồi
function drawFood() {
  context.fillStyle = "red";
  context.fillRect(
    food[0] * CELL_SIZE + 2,
    food[1] * CELL_SIZE + 2,
    CELL_SIZE - 4,
    CELL_SIZE - 4
  );
}

//vẽ rắn
function drawSnake() {
  context.fillStyle = "white";
  for (let cell of snake) {
    context.fillRect(
      cell[0] * CELL_SIZE + 1,
      cell[1] * CELL_SIZE + 1,
      CELL_SIZE - 2,
      CELL_SIZE - 2
    );
  }
}

//hiển thị điểm
function displayScore() {
  context.font = "20px Arial";
  context.fillStyle = "grey";
  context.fillText("Score: " + (snake.length - 3), 5, 20);
}

//hướng ban đầu người dùng nhập = hướng mặc định
let intent = direction;

//đọc hướng người dùng nhập từ bàn phím
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" && direction !== 2) {
    intent = 0;
  } else if (e.key === "ArrowLeft" && direction !== 0) {
    intent = 2;
  } else if (e.key === "ArrowUp" && direction !== 1) {
    intent = 3;
  } else if (e.key === "ArrowDown" && direction !== 3) {
    intent = 1;
  }
});

//điều chỉnh hướng rắn khi đâm vào tường
function wall() {
  //TODO
}

//tạo vị trí ngẫu nhiên cho mồi
function randfood() {
  //TODO
}

//kiểm tra sự sống của rắn
function survive() {
  //TODO
}

//xử lý khung hình
function updateGameState() {
  //TODO
}

const STEP = 0.1;
let accumulate = 0;

//tốc độ khung hình
function update(delta) {
  accumulate += delta;

  while (accumulate >= STEP) {
    updateGameState();
    accumulate -= STEP;
  }
  context.clearRect(0, 0, 600, 400);
  drawBackground();
  displayScore();
  drawSnake();
  drawFood();
}

let lastUpdate = Date.now();

//hàm chính
(function loop() {
  const delta = (Date.now() - lastUpdate) / 1000;
  lastUpdate = Date.now();

  update(delta);

  if (!survive()) {
    alert("You lose!\nScore: " + (snake.length - 3));
    return;
  }
  requestAnimationFrame(loop);
})();
