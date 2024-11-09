const canvas = document.getElementById("squaresCanvas");
const ctx = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

const initialSize = 200;
const sizeDecrease = 15;

for (let i = 0; i < 10; i++) {
    const size = initialSize - i * sizeDecrease;
    const offset = size / 2;

    ctx.strokeStyle = `rgba(0, 0, 255, ${1 - i * 0.1})`;

    ctx.strokeRect(centerX - offset, centerY - offset, size, size);
}