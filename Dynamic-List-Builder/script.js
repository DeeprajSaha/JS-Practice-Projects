const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("reset");
const items = document.querySelector(".itemList");
const input = document.querySelector("#itemInput");

let functionToCalculat = (e) =>{
        let ul = document.querySelector('ul');

        if(input.value.trim() === ''){
            items.textContent = 'Please Enter a Valid input';
            items.style.backgroundColor = 'tomato';
            return;
        }

        if(!ul){
            ul = document.createElement('ul');
            items.innerHTML = '';
            items.style.backgroundColor ='transparent';           
            items.appendChild(ul);
        }

        const li = document.createElement('li');
        li.textContent = input.value.trim();
        ul.appendChild(li);

        input.value = "";
        input.focus();

        return;
}

addBtn.addEventListener('click', () =>{
    functionToCalculat();
});

resetBtn.addEventListener("click", () => {
    items.innerHTML = "";
    items.style.backgroundColor ='transparent'
    input.value = "";
    input.focus();
});
