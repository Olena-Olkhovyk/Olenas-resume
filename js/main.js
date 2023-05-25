const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

const form=document.getElementById("main-form");
form.addEventListener("submit", checkForm);
let fail = "";

navBtn.onclick= () => {
    if (nav.classList.toggle("open")){
     navBtnImg.src = "./img/NAV CLOSE.svg";
    }
    else{
     navBtnImg.src = './img/NAV.svg';
    }
}


function checkForm(e){
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("text").value;
    if(name == "" || email == "" || phone == ""){
    fail="Please fill in all fields";
    }

    if(fail!=""){
        document.getElementById("error").innerHTML=fail;
    }
}