'use strict';

function DomElement(selector, height, width, bg, fontSize, position, content) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.position = position;
    this.content = content;
}

DomElement.prototype.createElement = function () {
    let elem;
    if (this.selector[0] === '.') {
        elem = document.createElement('div');
        elem.classList.add(this.selector.substring(1));
        document.body.append(elem);
    } else if (this.selector[0] === '#') {
        elem = document.createElement('p');
        elem.id = this.selector.substring(1);
        document.body.append(elem);
    }
    elem.style.height = this.height;
    elem.style.width = this.width;
    elem.style.backgroundColor = this.bg;
    elem.style.fontSize = this.fontSize;
    elem.style.position = this.position;
    elem.textContent = this.content;
};

let test = new DomElement('.hello', '100px', '100px', 'green', '20px', 'absolute', 'hello');

document.addEventListener('DOMContentLoaded', function () {
    test.createElement();
    const element = document.querySelector(test.selector);
    let elementPositionX = 0;
    let elementPositionY = 0;
    document.addEventListener('keydown', function (key) {
        if (key.code === 'ArrowRight') {
            elementPositionX += 10;
            element.style.left = `${elementPositionX}px`;
        } else if (key.code === 'ArrowDown') {
            elementPositionY += 10;
            element.style.top = `${elementPositionY}px`;
        } else if (key.code === 'ArrowLeft') {
            elementPositionX -= 10;
            element.style.left = `${elementPositionX}px`;
        } else if (key.code === 'ArrowUp') {
            elementPositionY -= 10;
            element.style.top = `${elementPositionY}px`;
        }
    });
});