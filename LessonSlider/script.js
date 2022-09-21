let testArr = [1, 2, 3]

testArr = testArr.map(el => { console.log(el + 10) })


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function createInitialImage(number) {

    const image = document.createElement('img');
    image.setAttribute('src', `images/${number}.jpg` )
    const parent = document.getElementById('main');
    parent.appendChild(image);

    return image;
    
}



function changeImages() {
    if (currentImage == max ) { 
        currentImage = min;
    } else { 
        currentImage ++;
    }
    imageElement.setAttribute('src', `images/${currentImage}.jpg` )
}

const min = 1;
const max = 6;
const random = getRndInteger(min, max);
const imageElement = createInitialImage(random);
let currentImage = random;

 

// setInterval(changeImages, 1000);

function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Text'
    document.getElementById('main').appendChild(button);
}

createButton()
createButton()

