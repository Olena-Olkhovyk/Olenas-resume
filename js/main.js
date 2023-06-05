//form validation
const form=document.getElementById("main-form");
//navbar
const btn = document.querySelector(".nav-button");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".nav-list");
//navbar
btn.addEventListener("click", function () {
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});


//Display error message in form
function printError(elemId,hintMsg){
    document.getElementById(elemId).innerHTML=hintMsg;
}
//Validation form
function checkForm(e){
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("phone").value;
    let emailError=document.getElementById("emailErr");
    let nameError = document.getElementById("nameErr");
    let mobError=document.getElementById("mobileErr");
    let nameErr=true;
    let emailErr=true;
    let mobileErr=true;
//Checking name 
    if(name == "") {
        printError("nameErr", "Please enter your name");
        nameError.style.color="red";
    } else if(name.length<=1||name.length>20){
        printError("nameErr","Please enter your full name");
        nameError.style.color="red";
    }
      else {
            printError("nameErr", "");
            nameErr = false;
        }
//Checking email
        if(email==""){
            printError("emailErr", "Please enter your email");
            emailError.style.color="red";
        }else{
            printError("emailErr", "");
            emailErr=false;
        }
//Checking mobile phone
        if(phone==""){
            printError("mobileErr", "Please enter your mobile phone");
            mobError.style.color="red";
        }else{
            let equat=/^[\d\+][\d\(\)\ -]{4,14}\d$/;
            if(equat.test(phone)===false){
                printError("mobileErr", "Please enter a valid number");
            }else{
                printError("mobileErr","");
                mobileErr=false;
            }
        }
    }
    form.addEventListener("submit", checkForm);

