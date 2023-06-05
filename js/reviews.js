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
  //reviews
const img = document.querySelector("#img-person");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn=document.querySelector(".random-btn");

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