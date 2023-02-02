var rectangle_width = 200;
var rectangle_height = 120;
var rect = document.getElementById("rectangle");
var left = 100;
var up = 100;
function moveLeft() {
    left -= 20;
    rect.style.left = left + "px";
}

function moveRight() {
    left += 20;
    rect.style.left = left + "px";
}

function moveUp() {
    up -= 20;
    rect.style.top = up + "px";
}

function moveDown() {
    up += 20;
    rect.style.top = up + "px";
}

function reset() {
    rect.style.backgroundColor = "red";
    left = 100;
    top = 100;
    rectangle_width = 200;
    rectangle_height = 120;

    rect.style.left = left + "px";
    rect.style.up = up + "px";
    rect.style.height = rectangle_height + "px";
    rect.style.width = rectangle_width + "px";
}

function increaseSize() {
    rectangle_height += 20;
    rectangle_width += 20;
    rect.style.height = rectangle_height + "px";
    rect.style.width = rectangle_width + "px";
}

function decreaseSize() {
    rectangle_height -= 20;
    rectangle_width -= 20;
    rect.style.height = rectangle_height + "px";
    rect.style.width = rectangle_width + "px";
}

