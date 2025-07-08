let text = document.getElementById('textInput');
let result = document.getElementById('result');

text.addEventListener( 'input', () => {
    const count = text.value.trim().length;
    
    result.textContent = `Characters typed ${count}`;

    if (count > 100) {
    result.classList.add('warning');
    } else {
    result.classList.remove('warning');
    }
} )