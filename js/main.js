// local reviews data
const reviews = [
    {
      id: 1,
      name: "Olena Voloshina",
      job: "Head of the contact center of Privat Bank",
      img: "./img/Olena.jpg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Samuel Anderson",
      job: "Front-end Developer",
      img: "./img/samuel.jpg",
      text: "I have known  Olena Olkhovyk for nearly two years. She is a synonym for punctuality and very responsible, especially in her professional world. Her passion and desire to build websites inspired me to be the software engineer that I have become. She is a goalgetter and will never give up on anything no matter how minute it is."
    },
    {
      id: 3,
      name: "Oleksandr Chelombitko",
      job: "Privatbank supervisor",
      img: "./img/me1.jpg",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    }
  ];
//form validation
const form=document.getElementById("main-form");
//navbar
const btn = document.querySelector(".nav-button");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".nav-list");
//reviews
const img = document.querySelector("#img-person");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn=document.querySelector(".random-btn")

//Random review
randomBtn.addEventListener("click", function(){
    currentItem=Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
})

let currentItem=0;
function showPerson(person){
let item=reviews[person];
img.src=item.img;
author.textContent=item.name;
job.textContent=item.job;
info.textContent=item.text;
}

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
})
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
})

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
    let nameErr=(emailErr=mobileErr=true);
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

