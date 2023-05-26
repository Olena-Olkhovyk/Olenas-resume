const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

const form=document.getElementById("main-form");
form.addEventListener("submit", checkForm);

navBtn.onclick= () => {
    if (nav.classList.toggle("open")){
     navBtnImg.src = "./img/NAV CLOSE.svg";
    }
    else{
     navBtnImg.src = './img/NAV.svg';
    }
}
//Display error message
function printError(elemId,hintMsg){
    document.getElementById(elemId).innerHTML=hintMsg;
}
//Validation form
function checkForm(e){
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("phone").value;
    let nameErr=(emailErr=mobileErr=true);
//Checking name 
    if(name == "") {
        printError("nameErr", "Please enter your name");
    }  else {
            printError("nameErr", "");
            nameErr = false;
        }
//Checking email
        if(email==""){
            printError("emailErr", "Please enter your email");
        }else{
            printError("emailErr", "");
            emailErr=false;
        }
//Checking mobile phone
        if(phone==""){
            printError("mobileErr", "Please enter your mobile phone");
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


