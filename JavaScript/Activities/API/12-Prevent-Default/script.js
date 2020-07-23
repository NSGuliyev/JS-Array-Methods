var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submitEl = document.querySelector("#submit");
var responseText = document.querySelector("#response");

submitEl.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event)

    var response = "Thank you for tour submission " + nameInput.value + 
    " We will reach out to you at " + emailInput.value + ".";

    responseText.textContent = response;
})