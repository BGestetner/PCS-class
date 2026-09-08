const theButton = document.querySelector('#theButton');
let clicks = 1;

theButton.addEventListener('click',onClick);

function onClick () {
    const newButton = document.createElement('button');
    document.body.appendChild(newButton);
    newButton.innerText = ++clicks;
    newButton.addEventListener('click', onClick);
 }