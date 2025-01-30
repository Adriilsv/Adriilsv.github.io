const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let corazones = [];
let numCorazones = 100;

for (let i = 0; i < numCorazones; i++) {
corazones.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
velocidadX: Math.random() * 2 - 1,
velocidadY: Math.random() * 2 - 1,
tamaño: Math.random() * 10 + 20
});
}

function dibujarCorazones() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

for (let i = 0; i < corazones.length; i++) {
dibujarCorazon(corazones[i].x, corazones[i].y, corazones[i].tamaño);

corazones[i].x += corazones[i].velocidadX;
corazones[i].y += corazones[i].velocidadY;

if (corazones[i].x < 0 || corazones[i].x > canvas.width) {
corazones[i].velocidadX = -corazones[i].velocidadX;
}

if (corazones[i].y < 0 || corazones[i].y > canvas.height) {
corazones[i].velocidadY = -corazones[i].velocidadY;
}
}

requestAnimationFrame(dibujarCorazones);
}

function dibujarCorazon(x, y, tamaño) {
ctx.save();
ctx.font = tamaño + 'px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
ctx.fillText('\u2665', x, y);
ctx.restore();
}

dibujarCorazones();