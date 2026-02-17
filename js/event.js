// Option 1
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option 2
const makeBlue = document.getElementById('btn-make-blue');
// console.log(makeBlue);

makeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// Option 3
const makePurple = document.getElementById('btn-make-purple');
// console.log(makePurple);
makePurple.onclick = purple;
function purple(){
    document.body.style.backgroundColor = 'purple';
}

// option 4 addEventListener('event type', function) (recommended)
const makeGreen = document.getElementById('btn-make-green');
makeGreen.addEventListener('mouseover', function green(){
    document.body.style.backgroundColor = 'green';
})

makeGreen.addEventListener('click', function gold(){
    document.body.style.backgroundColor = 'gold';
})

makeGreen.addEventListener('mouseout', function white(){
    document.body.style.backgroundColor = 'white';
})

