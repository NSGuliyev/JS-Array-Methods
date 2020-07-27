var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "Enter Tag");

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
    alert("Please enter valid TAG !");
} else {
    var tag = document.createElement(tagName);
    tag.textContent = "This was made via PROMPT. It is a " + tagName;
    document.body.appendChild(tag);
}

var nextTag = confirm("Would you like to add another TAG ?"); 
if (nextTag === true) {
    var secondTagName = prompt("Please enter another HTML TAG (ex. h1, h2, p, div):", "Enter Tag")

    if (secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
        alert("Please enter valid TAG !");
    } else {
        var  sencondTag = document.createElement(secondTagName);
        sencondTag.textContent = "This is our second TAG via PROMPT, it is a " + secondTagName;
        document.body.appendChild(sencondTag)
    }
}