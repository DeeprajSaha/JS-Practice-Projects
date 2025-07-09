const inputGmail = document.getElementById('email')
const inputnumber = document.getElementById('number')
const inputpass = document.getElementById('password')
const inputCpass= document.getElementById('cpassword')
const Btn = document.querySelector("#button")
const result = document.querySelector("#result")

const checkData = () => {

    const email = inputGmail.value.trim();
    const number = inputnumber.value.trim();
    const pass = inputpass.value.trim();
    const cpass = inputCpass.value.trim();

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if( number === '' || email === '' || pass === '' || cpass === ''){
        result.textContent = "All Fielda are mendatory";
        result.classList.add("error");
        result.classList.remove("success");
    }
    else if(number.length !== 10 || isNaN(number)){
        result.textContent = "Number should be 10 Digit";
        result.classList.add("error");
        result.classList.remove("success");
    }
    else if(!passwordPattern.test(pass)){
        result.textContent = "Password must be at least 8 characters long and include a letter, a number, and a special symbol.";
        result.classList.add('error');
        result.classList.remove("success");
    }
    else if(pass !== cpass){
        result.textContent = "Both password should be match"
        result.classList.add("error");
        result.classList.remove("success");
    }else {
        result.textContent = "Form submit successfully"
        result.classList.remove("error")
        result.classList.add("success")

        inputGmail.value = "";
        inputnumber.value = "";
        inputpass.value = "";
        inputCpass.value = "";

        inputGmail.focus();
    }

}
Btn.addEventListener( 'click',(e) =>{
    e.preventDefault(); 
    checkData();
} )
