var activeIndex = 1;
const groups = document.getElementsByClassName('card-group');

const handleNextClick = () => {
    activeIndex = activeIndex < groups.length ? activeIndex + 1 : 1;
    for (let index = 0; index < groups.length; index++) {
        groups[index].classList.add('transition-out')
    }
    document.querySelector(`.card-group${activeIndex}`).classList.remove('transition-out')
    document.querySelector(`.card-group${activeIndex}`).classList.add('transition-in')
    console.log("next click function", activeIndex)
}

const handlePrevClick = () => {
    activeIndex = activeIndex > 1 ? activeIndex - 1 : 3;
    for (let index = 0; index < groups.length; index++) {
        groups[index].classList.add('transition-out')
    }
    document.querySelector(`.card-group${activeIndex}`).classList.remove('transition-out')
    document.querySelector(`.card-group${activeIndex}`).classList.add('transition-in')
    console.log("prev click function", activeIndex)
}
