let offsetRight = 0;    //cсмещение от левого края
let offsetLeft = 0;
const sliderWidth = 250;
count = 0;


const sliderWindow = document.querySelector('.slider')
const sliderLine = document.getElementsByClassName('slider-line')[0]
const nextBtn = document.getElementsByClassName('next-btn')[0]
const prevBtn = document.getElementsByClassName('prev-btn')[0]
const images = Array.from(document.getElementsByTagName('img'))

let tmpImage = images[0]




prevBtn.addEventListener('click', () => {
    count--;
    if (count >= 0) {
        sliderLine.style.transform = `translate(-${count*sliderWidth}px)`
    } else {
        count = 3;  
        sliderLine.style.transform = `translate(-${count*sliderWidth}px)`
    }

    
})

nextBtn.addEventListener('click', () => {
    count++;
    if (count < 4) {
        sliderLine.style.transform = `translate(-${count*sliderWidth}px)`
        console.log(count*sliderWidth)
        // count++;
    } else {
        // let tmp = 
        count = 0;
        sliderLine.style.transform = `translate(-${count*sliderWidth}px)`
    }

})

