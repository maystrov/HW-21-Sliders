const slider = document.querySelector('.slider')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const slides = document.querySelectorAll('.slide')
const header = document.querySelector('h2')
const width = slider.clientWidth;



nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

let sliderUrls = [];

slides.forEach(element => {
    sliderUrls.push(element.src)
    element.remove()
});



console.log(sliderUrls.length-1)

let step = 0;
let offset = 0;





function draw() {
    let image = document.createElement('img');
    image.src = sliderUrls[step];
    image.classList.add('slide');
    image.style.left = offset*400 + 'px';
    slider.appendChild(image);
    if (step+1 == sliderUrls.length) {
        step = 0;
    } else step++;
    offset = 1;
}
console.log(sliderUrls.length - 1)


let stepLeft = sliderUrls.length;
console.log(stepLeft - 1)
function leftDraw() {
    let image = document.createElement('img');
    image.src = sliderUrls[stepLeft];
    image.classList.add('slide', 'left');
    image.style.left = -400 + 'px';
    slider.appendChild(image);
    // stepLeft--;
}

console.log(sliderUrls.length - 1)


function rightDraw() {
    let image = document.createElement('img');
    image.src = sliderUrls[step];
    image.classList.add('slide', 'right');
    image.style.left = 400 + 'px';
    slider.appendChild(image);
    stepLeft++;
}
console.log(sliderUrls.length - 1)


function nextSlide() {
    nextBtn.onclick = null;

    let newSlides = document.querySelectorAll('.slide')
    // console.log(newSlides)
    newSlides[0].remove();
    newSlides.forEach((el, i) => {
        el.style.left = 400*i - 400 + 'px';
    });

    setTimeout(() => {
        newSlides[0].remove();
        draw()
        // leftDraw()
        nextBtn.onclick = nextSlide;
    }, 500);
    
    
}
console.log(sliderUrls.length - 1)


function prevSlide() {
    let newSlides = document.querySelectorAll('.slide')
    console.log(newSlides)
    document.querySelector('.left').
    newSlides[1].remove();
    console.log(newSlides)

   
    leftDraw()

    newSlides = document.querySelectorAll('.slide')
    console.log(newSlides)

    
}
console.log(sliderUrls.length - 1)


draw();
rightDraw();
leftDraw();



console.log(sliderUrls.length - 1)










