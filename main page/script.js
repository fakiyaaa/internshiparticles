document.addEventListener("DOMContentLoaded", () => {
  // Fetch the header.html file
  fetch("header.html")
    .then((response) => response.text())
    .then((html) => {
      // Create a temporary element to hold the fetched HTML
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;

      // Insert the header at the beginning of the body
      document.body.insertBefore(tempDiv.firstElementChild, document.body.firstChild);
    })
    .catch((error) => {
      console.error("Error loading the header:", error);
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".nav-bar");

  // Toggle the active class on click
  hamburger.addEventListener("click", () => {
    navBar.classList.toggle("active");
  });
});


$(document).ready( ()=> {

  $("#technology").on("click", function () {
    window.location.href = "articles_page/technology/techologyarticles.html";
  });

  $("#business").on("click", function () {
    window.location.href = "articles_page/business/businessarticles.html";
  });

  $("#research").on("click", function () {
    window.location.href = "articles_page/research/researcharticles.html";
  });

});