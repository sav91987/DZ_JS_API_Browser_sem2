const imgEls = document.querySelectorAll(".slider img");

const clickEvent = new Event("click");

const btnNextEl = document.querySelector(".button-next");
const btnPrevEl = document.querySelector(".button-prev");


let currentIndex = 0;

btnNextEl.addEventListener("click", () => {
    let index = currentIndex + 1;
    if (index >= imgEls.length) {
        index = 0;
    }
    showSlide(index);
});

btnPrevEl.addEventListener("click", () => {
    let index = currentIndex - 1;
    if (index < 0) {
        index = imgEls.length - 1;
    }
    showSlide(index);
});


const pointerEl = document.querySelector(".pointer");

for (let i = 0; i < imgEls.length; i++) {
    const btnPointEl = document.createElement('button');
    btnPointEl.setAttribute('data-id', i);
    btnPointEl.classList.add("point");
    pointerEl.append(btnPointEl);
}

const pointElFirst = pointerEl.querySelector('[data-id="0"]');
pointElFirst.classList.add('currentPoint');

const btnPointEls = document.querySelectorAll(".point");

pointerEl.addEventListener("click", (e) => {
    clearInterval(interval);
    const currentAttribute = +e.target.getAttribute("data-id");
    showSlide(currentAttribute);
    });
    
    function showSlide(index) {
        imgEls[currentIndex].classList.remove("active");
        imgEls[index].classList.add("active");
        btnPointEls[currentIndex].classList.remove("currentPoint");
        btnPointEls[index].classList.add("currentPoint");
        currentIndex = index;
    }
const interval = setInterval(() => btnNextEl.dispatchEvent(clickEvent), 3000);
