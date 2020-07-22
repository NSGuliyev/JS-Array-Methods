var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "Enter Tag");

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
    alert ("please enter a valid TAG");
}else {
    var tag = document.createElement(tagName);
    tag.textContent = "This was made via PROMPTS. It is a " + tagName.toUpperCase()
    document.body.appendChild(tag)
}

var nextTag = confirm("Would you like to add another tag?");

if (nextTag === true) {
    var secondTagName =prompt("Please enter another HTML Tag (ex. h1, h2, p, div):", "Enter Tag");
    if (secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div"){
        alert ("please enter a valid TAG");
    } else {
        var secondTag = document.createElement(secondTagName)
        secondTag.textContent = "This our second TAG via prompt. it is a " + secondTagName.toUpperCase()
        document.body.appendChild(secondTag)
    }

}