// local reviews data
const reviews = [
    {
      id: 1,
      name: "Olena Voloshina",
      job: "Director, Customer Service department Privat Bank",
      img: "./img/Olena.jpg",
      text: "As the director of Privat Bank's customer Service department, Olena proved to me her initiative-oriented prowess. She coped successfully  with her official duties and  also has good business communication skills. Olena  has a high working capacity, strongly supports the work of the company in difficult moments, even outside working hours. In the team, she expressed her point of view and took the initiative to help team members adapt to the team.",
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
      img: "./img/Sacha.jpg",
      text: "During the period of long-term work with Olena, I can only give positive feedback. She was always responsible and proactive. Olena was never afraid of new challenges and changes. She always tries her possible best to find solutions quickly and efficiently. In her team, she has established herself as a leader both in work processes and in the life of the team. She has organizational and initiative-oriented  skills.",
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
});
window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
});
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
});
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
});