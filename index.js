const pass=document.querySelector("#password");
const confirm=document.querySelector("#confirm");
const signUpForm=document.querySelector("#sign_up");
const msg=document.querySelector("#message");
const submitBtn = document.getElementById('submitBtn');

console.log("signUpForm type:", typeof signUpForm);
console.log("signUpForm:", signUpForm);

function passfunc(){
    if(pass.value!=confirm.value){
        msg.textContent="*Passwords do not match!";
        pass.style.border_color="Red";
        pass.setAttribute("isvalid","false");
    }
    else {
        msg.textContent = "";
        pass.style.borderColor = "";
        pass.setAttribute("isvalid","true");
    }
}

        
submitBtn.addEventListener('click', ()=> {
    if (pass.value === confirm.value) {
        console.log("Submit button clicked!");
        signUpForm.submit(); // Submit the form only if passwords match
    } else {
        console.log("Passwords do not match!");
        msg.textContent = "*Passwords do not match!";
        pass.style.borderColor = "Red";
        pass.setAttribute("isvalid", "false");
    }
});