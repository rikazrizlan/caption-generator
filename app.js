fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    var randomNumber = Math.floor(Math.random() * data.length);
    document.querySelector("p").innerText = data[randomNumber].text;
    document.querySelector("h6").innerText = data[randomNumber].author;
});

const modeBtn = document.querySelector(".fa-adjust");

modeBtn.addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("body-dark");
  modeBtn.classList.toggle("btn-dark");
  document.querySelector(".dev a").classList.toggle("link-dark");
})






