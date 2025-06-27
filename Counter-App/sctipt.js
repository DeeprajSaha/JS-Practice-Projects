let addBtn = document.querySelector("#add")
let subBtn = document.querySelector("#sub")
let restBtn = document.querySelector("#reset")

let display = document.querySelector("#display")

let count = 0;

function updateDisplay() {
    display.textContent = count;
    if (count < 0) {
        display.style.color = "red";
    } else {
        display.style.color = "#00ff95";
    }
}


addBtn.addEventListener("click" , function () {
    count += 1;
    updateDisplay()
})

subBtn.addEventListener("click", () =>{
    count -= 1;
    updateDisplay()
})

restBtn.addEventListener("click", () => {
    count = 0;
    updateDisplay()
})