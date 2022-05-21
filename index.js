var cardContainer = document.getElementById("cardContainer");

function shuffle() {
  let arr = [];
  cardContainer.innerHTML = "";
  do {
    let num = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    arr.push(num);
    arr = arr.filter((item, index) => {
      return arr.indexOf(item) === index;
    });
  } while (arr.length < 10);

  console.log(arr);

  //   console.log(randomNumber);
  for (var i = 1; i < 10; i++) {
    var card = document.createElement("div");
    card.innerHTML = arr[i];
    card.className = "card";
    cardContainer.appendChild(card);
  }
}

shuffle();

function sort() {
  var card = document.getElementsByClassName("card");
  console.log(card.length);

  var cardNumers = [];
  for (var i = 0; i < card.length; i++) {
    cardNumers.push(parseInt(card[i].textContent || card[i].innerText));
  }
  console.log(
    cardNumers.sort(function (a, b) {
      return a - b;
    })
  );
  cardNumers
    .sort(function (a, b) {
      return a - b;
    })
    .forEach(function (element, index) {
      card[index].innerHTML = element;
    });
}
