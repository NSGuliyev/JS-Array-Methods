var main = document.querySelector("#main");
var sitesEl = document.querySelector(".sites");
var site1El = document.querySelector(".site1");
var site2El = document.querySelector(".site2");
var site3El = document.querySelector(".site3");
var siteTitles = document.querySelectorAll("h4");

var sites = [
    "https://yahoo.com", "https://twitter.com", "https://github.com",
    "https://imstagram.com", "https://facebook.com"
];

site1El.children[0].textContent = "Site 1";
site1El.children[1].setAttribute("href", "https://google.com" );
site1El.children[1].children[0].setAttribute("src", "images/image_1.jpg");
site1El.children[1].children[0].setAttribute("alt", "Working Man");
site1El.children[1].children[0].setAttribute("style", "padding:20px 0;");

site2El.children[0].textContent = "Site 2";
site2El.children[1].setAttribute("href", "https://yahoo.com" )
site2El.children[1].children[0].setAttribute("src", "images/image_2.jpg");
site2El.children[1].children[0].setAttribute("alt", "BrainStrom");
site2El.children[1].children[0].setAttribute("style", "padding:20px 0;");

site3El.children[0].textContent = "Site 3";
site3El.children[1].setAttribute("href", "https://twitter.com" )
site3El.children[1].children[0].setAttribute("src", "images/image_3.jpg");
site3El.children[1].children[0].setAttribute("alt", "Meeting");
site3El.children[1].children[0].setAttribute("style", "padding:20px 0;");

for ( let i = 0; i < siteTitles.length; i++) {
    siteTitles[i].setAttribute("style", "text-Decoration: underline; text-transform: uppercase;")
}

for (let i = 0; i < sites.length; i++) {
    site1El.children[1].setAttribute("href", sites[Math.floor(Math.random() * sites.length)])
    
}