
const cards = [
    {
      id: 1,
      name: "Zuzanna Kowalska",
      job: "web developer",
      img: "images/img2.jpg",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis lorem felis, at commodo est lacinia id. Suspendisse laoreet ex at risus feugiat ultricies. Integer ut justo tempus, ullamcorper arcu ut, viverra lacus. Aenean tristique imperdiet leo, quis faucibus arcu ornare at.",
    },
    {
      id: 2,
      name: "Anna Nowak",
      job: "web designer",
      img: "images/img3.jpg",
      text:
        "Nunc at lectus auctor elit volutpat pellentesque eu in massa. Cras sodales dui egestas iaculis fringilla. Curabitur porta eleifend erat in accumsan. Pellentesque venenatis faucibus metus, nec lacinia mauris molestie et.",
    },
    {
      id: 3,
      name: "Piotr Piotrowski",
      job: "intern",
      img: "images/img1.jpg",
      text:
        "Fusce ultricies ac est eget cursus. Nulla aliquam lorem at accumsan ullamcorper. Vivamus eu velit velit. Nulla gravida tellus a sodales malesuada. Morbi quis ornare massa. Ut eu leo luctus, euismod sem sit amet, dictum neque. Mauris sit amet nibh ac metus tempus sollicitudin.",
    },
    {
      id: 4,
      name: "Bartosz Andrzejewski",
      job: "Manager",
      img: "images/img4.jpg",
      text:
        "Pellentesque vitae posuere dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed massa nec dui cursus aliquam sagittis eget dui. Mauris scelerisque, elit ut viverra malesuada, dui felis hendrerit erat, eu vestibulum tortor metus eu tortor. In tristique at justo et congue. Fusce eget euismod nisl.",
    },
  ];
  
  let img = document.getElementById("person-img");
  let  author = document.getElementById("author");
  let job = document.getElementById("job");
  let info = document.getElementById("info");
  let prev = document.querySelector(".prev");
  let next = document.querySelector(".next");
  let randomBtn = document.querySelector(".random");
  let currentCard = 0;
  
  window.addEventListener("DOMContentLoaded", function () {
    const item = cards[currentCard];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  function showContent(person) {
    const item = cards[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  next.addEventListener("click", function () {

    currentCard++;
    if (currentCard > cards.length - 1) {
      currentCard = 0;
    }
    showContent(currentCard);
  });
  prev.addEventListener("click", function () {

    currentCard--;
    if (currentCard < 0) {
      currentCard = cards.length - 1;
    }
    showContent(currentCard);
  });
  randomBtn.addEventListener("click", function () {

    currentCard = Math.floor(Math.random() * cards.length);
    showContent(currentCard);
  });