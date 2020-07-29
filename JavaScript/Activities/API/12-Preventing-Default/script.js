var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var submitEl = document.getElementById("submit");
var responseEl = document.getElementById("response");

submitEl.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event);

    var response = "Thank you for your submission " + nameInput.value + " ! We will reach out to you at "
    + emailInput.value + ".";
    responseEl.textContent = response;
})