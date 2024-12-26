document.addEventListener("DOMContentLoaded", () => {
  // Fetch the header.html file
  fetch("/header.html")
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
