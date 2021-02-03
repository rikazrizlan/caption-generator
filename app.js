const quoteBtn = document.querySelector('.caption-btn');
const modeBtn = document.querySelector(".fa-adjust");
const copyBtn = document.querySelector(".fa-copy");

class Quotes {
  async getQuotes() {
    try {
      let result = await fetch("https://type.fit/api/quotes");
      let data = await result.json();
      quoteBtn.addEventListener("click", () => {
        var randomNumber = Math.floor(Math.random() * data.length);
        document.querySelector("p").innerText = data[randomNumber].text;
        document.querySelector("h6").innerText = data[randomNumber].author;
      })
    } catch (error) {
      console.log(error);
    }
  }
}

class UI {
  changeTheme() {
    modeBtn.addEventListener("click", () => {
      document.querySelector(".container").classList.toggle("body-dark");
      modeBtn.classList.toggle("btn-dark");
      copyBtn.classList.toggle("btn-dark");
      document.querySelector(".dev a").classList.toggle("link-dark");
    })
  }

  copyQuote() {
    copyBtn.addEventListener("click", () => {
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
    })
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const quotes = new Quotes();
  const ui = new UI();
  quotes.getQuotes();
  ui.changeTheme();
  ui.copyQuote();
})