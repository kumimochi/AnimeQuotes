document.getElementById("btn").addEventListener("click", function () {
  fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((quote) => {
      document.getElementById("quote").innerHTML = quote.quote;
      document.getElementById("character").innerHTML = quote.character;
      document.getElementById("anime").innerHTML = quote.anime;
    });
});
