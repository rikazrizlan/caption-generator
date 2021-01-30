fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var randomNumber = Math.floor(Math.random() * data.length);
    document.querySelector("p").innerText = data[randomNumber].text;
    document.querySelector("h6").innerText = data[randomNumber].author;
});

const modeBtn = document.querySelector(".fa-adjust");
const copyBtn = document.querySelector(".fa-copy");

modeBtn.addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("body-dark");
  modeBtn.classList.toggle("btn-dark");
  copyBtn.classList.toggle("btn-dark");
  document.querySelector(".dev a").classList.toggle("link-dark");
})

/*
function myFunction() {

  var copyText = document.getElementById("quote");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");

  alert("Copied to clipboard");
}
*/

function copyElementText() {
  var text = document.getElementById("quote").innerText;
  var author = document.getElementById("author").innerText;
  var elem = document.createElement("textarea");
  document.body.appendChild(elem);
  elem.value = text + " -" + author;
  elem.select();
  document.execCommand("copy");
  document.body.removeChild(elem);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied to Clipboard";
}








