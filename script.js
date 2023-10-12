 // Get references to the <p> tag, the button, and the <h1> tag
    const paragraph = document.getElementById("status");
    const button = document.getElementById("enterBtn");
    const h1Output = document.getElementById("output");

    // Add a click event listener to the button
    button.addEventListener("click", function () {
      // Change the text inside the <p> tag
      paragraph.textContent = "Entered Metaverse";

      // Wrap the updated text in an <h1> tag and set it as the content of the <h1> tag
      h1Output.textContent = paragraph.textContent;
    });