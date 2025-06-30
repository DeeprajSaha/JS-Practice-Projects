const form = document.querySelector("form");
const resetBtn = document.getElementById('reset');
const button = document.querySelector("#calculate");

let calculateBMI = () =>{
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(!height || !weight || height <= 0 || weight <= 0){
        results.textContent = "Pleaes give a valid height and weight!";
        results.style.color = 'tomato'
        return;
    }

    const bmi = (weight / ((height*height) / 10000)).toFixed(2);
    results.textContent = `Your BMI is ${bmi}`;
    results.style.color = '#007bff'
}

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    calculateBMI();
})

button.addEventListener('click', () =>{
    calculateBMI();
})

    resetBtn.addEventListener("click", () => {
    height.value = '';
    weight.value = '';
    results.textContent = '';
    height.focus();
})