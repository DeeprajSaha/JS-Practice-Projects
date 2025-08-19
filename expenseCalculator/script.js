let expense = [];

let total = 0;

let expenseDisplay = () =>{
    let nameInput = document.getElementById("expenseName");
    let amountInput = document.getElementById("expenseAmount");


    let display = document.getElementById("expenseList")

    let name = nameInput.value;
    let amount = parseInt(amountInput.value);

    if(name && amount){
        // push inputs to the array

        expense.push({name:name, amount:parseInt(amount)});
            
        // displaying the inputs 

        let li = document.createElement("li");
        
        li.innerText = `${name} - ₹${amount.toLocaleString("en-IN")}`;

        display.appendChild(li);

        // total of the amount

        let totalAmount = document.getElementById("totalAmount");

        total += amount;

        totalAmount.innerText = `Total: ₹${total.toLocaleString("en-IN")}`;

    }
    else{
            alert("Please enter both fields");
    }

    // rest input fields
    nameInput.value = "";
    amountInput.value = "";



}

let button = document.getElementById("addBtn");

button.addEventListener('click', expenseDisplay);


