let input = document.querySelector("#userInput");
let check = document.querySelector("#checkBtn");
let resetBtn = document.querySelector("#reset");
let result = document.querySelector("#result");

check.addEventListener("click", () => {
    const num = Number(input.value);

    if(input.value === ''){
        result.textContent = " Please enter a number!";
    } else if(num % 2 === 0){
        result.textContent = `${num} is Even`
        result.style.color = 'lightgreen';
    }else{
        result.textContent = `${num} is Odd`
        result.style.color = 'tomato'
    }
})


resetBtn.addEventListener("click", () => {
    input.value = "";
    result.textContent = "Result will appear here - ";
    result.style.color = 'aliceblue';
    input.focus();
})
