// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "Hello,I am Susan Smith",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "hello everyone",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "hello,how are you?",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "My name is bill anderson.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem=0;

window.addEventListener("DOMContentLoaded", function () {
 showPerson(currentItem);
});

function showPerson(person){
   const item = reviews[person];
  img.src= item.img;
  author.textContent=item.name;
  job.textContent=item.job;
  info.textContent =item.text;
}

nextBtn.addEventListener("click",function(){
  currentItem++;
  if(currentItem>reviews.length -1){
    currentItem=0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click",function(){
  currentItem--;
  if(currentItem<0){
    currentItem =reviews.length-1;
  }
  showPerson(currentItem);
});

const form = document.querySelector('.contact_form');
function sendMessage(e){
  e.preventDefault();
  
   const name = document.querySelector('.name'),
      email = document.querySelector('.email'),
      msg = document.querySelector('.msg');

      Email.send({
    SecureToken : "ad85098d-f4c4-43dd-a015-2e29fecbb5c9",
    To : 'pragyapoudel77@gmail.com',
    From : email.value,
    Subject : Contact form,
    Body : msg.value
}).then(
  message => alert(message)
);


}
form.addEventListener('submit',sendMsg)

