let addBtn = document.querySelector("#add")
let subBtn = document.querySelector("#sub")
let restBtn = document.querySelector("#reset")

let display = document.querySelector("#display")

let count = 0;

addBtn.addEventListener("click" , function () {
    count += 1;
    display.textContent = count;
})

subBtn.addEventListener("click", () =>{
    count -= 1;
    display.textContent = count;
})

restBtn.addEventListener("click", () => {
    count = 0;
    display.textContent = count
})