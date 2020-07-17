console.log(pTags);

var pTags = document.querySelectorAll("p");
pTags[0].setAttribute("style", "font-size: 65px;");


var changeP = document.querySelector("#change2");
changeP.setAttribute("style", "color:blue; border:2px solid black; font-size: 35px;");


var aTags = document.querySelectorAll("a");
aTags[0].setAttribute("href", "https://github.com");

var imgEl = document.querySelectorAll("img");
imgEl[0].setAttribute("src", "images/image_1.jpg");
imgEl[0].setAttribute("style", "width:500px; height:200px;");


var divTags = document.querySelectorAll("div");
for (var i = 0; i < divTags.length; i++) {
  divTags[i].setAttribute("style", "text-decoration:underline; color:red;");
}








