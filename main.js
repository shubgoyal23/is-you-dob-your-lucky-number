const dateOfBirth = document.querySelector("#dateOfbirth");
const luckyNo = document.querySelector("#luckyNumber");
const checkBtn = document.querySelector("#checkBtn");
const output = document.querySelector("#output");

var total = 0;
checkBtn.addEventListener("click", function luckynoChecker() {
    let numbersend = (dateOfBirth.value);
    numbersend = numbersend.replaceAll("-", "")
    
    for(i = 0; i < numbersend.length; i++){
            total += Number(numbersend.charAt(i));
        }
    
    if((total % Number(luckyNo.value)) == 0 ){
        output.innerText = "yes its your lucky number ✌️"
    }else{
        output.innerText = "No its not your lucky number 🤐"

    }

});