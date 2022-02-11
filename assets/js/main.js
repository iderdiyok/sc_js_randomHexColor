
let color = document.getElementById("color");
let outputBlock = document.getElementById("outputBlock")
let out = document.getElementById("output")
let titel = document.getElementById("titel")
let subtitle = document.getElementById("subtitle")

function changeColor() {
    if (titel.innerHTML == "") {
        outputBlock.classList.add("shadow", "bg-light")
        titel.innerHTML = "Color History"
        subtitle.innerHTML = "Select the color you want to display again"
    }

    const randomColor = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
    out.innerHTML += `<div class="col"><a onclick="selectedColor(this)" class="fw-bold pe-auto text-decoration-none" style="color: ${color.innerHTML}; cursor:pointer">${color.innerHTML}</a></div>`
}

function selectedColor(e) {
    console.log(e.innerHTML);
    document.body.style.backgroundColor = e.innerHTML
    color.innerHTML = e.innerHTML
}


