
let color = document.getElementById("color");
let out = document.getElementById("output")

function changeColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
    out.classList.add("shadow", "bg-light")
    out.innerHTML += `<div class="col"><h4 style="color: ${color.innerHTML}">${color.innerHTML}</h4></div>`
}




