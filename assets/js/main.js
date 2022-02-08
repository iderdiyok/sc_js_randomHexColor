
let color = document.getElementById("color");
function changeColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}