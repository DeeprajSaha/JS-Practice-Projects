const input = document.querySelector("#birthYear");
const result = document.querySelector("#result");
const calcBtn = document.querySelector("#calcAge");
const resetBtn = document.querySelector("#reset");

let calculateAge = () => {
    const year = Number(input.value);
    const currentYear = new Date().getFullYear();

    if (input.value === '') {
        result.textContent = 'Please enter your birth year!';
        result.style.color = 'orange'; // ✅ fixed
        return;
    } else if (year > currentYear) {
        result.textContent = 'Birth year cannot be in the future!';
        result.style.color = 'red'; // ✅ fixed
        return;
    } else {
        const age = currentYear - year;
        result.textContent = `You are ${age} years old 🎉🎉`;
        result.style.color = 'lightgreen';
        return;
    }
};

calcBtn.addEventListener('click', () => {
    calculateAge();
});

resetBtn.addEventListener('click', () => {
    input.value = '';
    result.textContent = 'Your age will appear here';
    result.style.color = '#333';
    input.focus();
});
