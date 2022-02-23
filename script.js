let currentColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');
let largeText = document.querySelector('#tamanho');
let aplicar = document.querySelector('#aplicar');
let clear = document.querySelector('.clear');




document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});
screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
aplicar.addEventListener('click', tamanhoRisco)
clear.addEventListener('click', clearScreen);







function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');

};

function mouseDownEvent(e) {
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
    tamanhoRisco();
};

function mouseMoveEvent(e) {
    if (canDraw) {
        draw(e.pageX, e.pageY);
    }


};

function mouseUpEvent() {
    canDraw = false;


};

function tamanhoRisco() {
    let large = largeText.value;
    let valor = large;


    if (ctx.lineWidth >= 0) {
        ctx.lineWidth = valor;
    }
};

function draw(x, y) {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 0;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();



    mouseX = pointX;
    mouseY = pointY;
};

function clearScreen() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

}