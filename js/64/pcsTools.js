function getElement(selector) {
    return document.querySelector(selector);
}

function setCss(element, property, value) {
    // element.style.property = value;
    element.style[property] = value;
}

function getCss(element, property) {
    // return element.style[property];
    return getComputedStyle(element)[property];
}

function on(element, eventType, callback) {
    element.addEventListener(eventType, callback);
}

function click(element, callback) {
    on(element, 'click', callback);
}

function hide(element) {
    element.style.display = 'none';
}
function show(element) {
    element.style.display = 'inline-block';
}
function sparkle(element) {
    const oldColor = getComputedStyle(element).backgroundColor;
    console.log(oldColor);
    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777217).toString('16').padStart(6, '0')}`;
    }

    function changeColor() {
        element.style.backgroundColor = getRandomColor();
    }
    const id = setInterval(changeColor, 75);
    setTimeout(function () {
        clearInterval(id);
        element.style.backgroundColor = oldColor;
    }, 750);
}

export default function (selector) {
    const element = getElement(selector);

    return {
        css: function (property, value) {
            console.log(arguments);

            if (arguments.length < 2) {
                return getCss(element, property);
            } else {
                setCss(element, property, value);
            }
        },
        on: (eventType, callback) => on(element, eventType, callback),
        click: callback => click(element, callback),
        hide: () => hide(element),
        show: () => show(element),
        sparkle:()=>sparkle(element)
    };
}

