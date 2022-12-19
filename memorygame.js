// memory game
document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "Harry Potter",
      img: "https://res.cloudinary.com/maysunktong/image/upload/v1670348291/harry/harry_cldibi.png",
    },
    {
      name: "Ronald Weasley",
      img: "https://res.cloudinary.com/maysunktong/image/upload/v1670348290/harry/ronald_vlom6s.png",
    },
    {
      name: "Hermione Granger",
      img: "https://res.cloudinary.com/maysunktong/image/upload/v1670348291/harry/hermione_iabbxf.png",
    },
    {
      name: "Rubeus Hagrid",
      img: "https://res.cloudinary.com/maysunktong/image/upload/v1670348289/harry/hagrid_dkkagk.png",
    },
    {
      name: "Albus Dumbledore",
      img: "https://res.cloudinary.com/maysunktong/image/upload/v1670348295/harry/dumbledore_isnrln.png",
    },
    {
      name: "Ginny Weasley",
      img: "https://res.cloudinary.com/maysunktong/image/upload/v1670348291/harry/ginny_ex9cey.png",
    },
    {
      name: "Severus Snape",
      img: "https://res.cloudinary.com/maysunktong/image/upload/v1670348290/harry/snape_wjjh3f.png",
    },
    {
      name: "Lord Voldemort",
      img: "https://res.cloudinary.com/maysunktong/image/upload/v1670348295/harry/voldemort_fvetqy.png",
    },
    {
      name: "Harry Potter",
      img: "https://res.cloudinary.com/maysunktong/image/upload/v1670348291/harry/harry_cldibi.png",
    },
    {
      name: "Ronald Weasley",
      img: "https://res.cloudinary.com/maysunktong/image/upload/v1670348290/harry/ronald_vlom6s.png",
    },
    {
      name: "Hermione Granger",
      img: "https://res.cloudinary.com/maysunktong/image/upload/v1670348291/harry/hermione_iabbxf.png",
    },
    {
      name: "Rubeus Hagrid",
      img: "https://res.cloudinary.com/maysunktong/image/upload/v1670348289/harry/hagrid_dkkagk.png",
    },
    {
      name: "Albus Dumbledore",
      img: "https://res.cloudinary.com/maysunktong/image/upload/v1670348295/harry/dumbledore_isnrln.png",
    },
    {
      name: "Ginny Weasley",
      img: "https://res.cloudinary.com/maysunktong/image/upload/v1670348291/harry/ginny_ex9cey.png",
    },
    {
      name: "Severus Snape",
      img: "https://res.cloudinary.com/maysunktong/image/upload/v1670348290/harry/snape_wjjh3f.png",
    },
    {
      name: "Lord Voldemort",
      img: "https://res.cloudinary.com/maysunktong/image/upload/v1670348295/harry/voldemort_fvetqy.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");

  // put image.png as card back for total 16 cards
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  function createBoard() {
    console.log("cardArray", cardArray);
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute(
        "src",
        "https://res.cloudinary.com/maysunktong/image/upload/v1670348282/harry/backcard_y3e6f3.png"
      );
      card.classList.add("card");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute(
        "src",
        "https://res.cloudinary.com/maysunktong/image/upload/v1670348282/harry/backcard_y3e6f3.png"
      );
      cards[optionTwoId].setAttribute(
        "src",
        "https://res.cloudinary.com/maysunktong/image/upload/v1670348282/harry/backcard_y3e6f3.png"
      );
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].classList.add("invisible");
      cards[optionTwoId].classList.add("invisible");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute(
        "src",
        "https://res.cloudinary.com/maysunktong/image/upload/v1670348282/harry/backcard_y3e6f3.png"
      );
      cards[optionTwoId].setAttribute(
        "src",
        "https://res.cloudinary.com/maysunktong/image/upload/v1670348282/harry/backcard_y3e6f3.png"
      );
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  //flip your card
  function flipCard() {
    // rotate the card y axis 180 deg
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    
    this.setAttribute("src", cardArray[cardId].img);

    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 600);

    }
  }

  createBoard();
});
