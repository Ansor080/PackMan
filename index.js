const box = document.querySelector('.box')
const box_two = document.querySelector('.box_two')
const body = document.body

body.onclick = (event) => {
    const {x, y, target} = event

    box_two.style.top = y + "px"
    box_two.style.left = x + "px"
}

setInterval(() => {
    
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    
    box.style.top = y + "px";
    box.style.left = x + "px";
}, 1300);