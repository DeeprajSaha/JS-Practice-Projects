const inputValue = document.querySelector("#input");
const addBtn = document.querySelector("#btn");
const result = document.querySelector("ul");

let addList = () =>{

    const message = document.getElementById("message");

    if (inputValue.value.trim() === "") {
    message.textContent = "Please enter the task";
    return;
    }else {
        message.textContent = "";
        }
    if (inputValue.value.trim() !== "") {

        const li = document.createElement("li");
        const taskText  = document.createElement("span");
        const deleteBtn = document.createElement("button");
        const checkbox = document.createElement("input");

        checkbox.type = 'checkbox';

        deleteBtn.innerHTML = "🗑️";
        taskText.textContent = inputValue.value.trim();

        li.append(checkbox)
        li.append(taskText)
        li.append(deleteBtn)
        result.appendChild(li);

        inputValue.value = "";
        inputValue.focus();

        checkbox.addEventListener('change', () => {
        li.classList.toggle("completed"); 
        });

        deleteBtn.addEventListener('click', () => {
        li.remove();
        });
        }
}

addBtn.addEventListener('click', () => {
    addList();
})