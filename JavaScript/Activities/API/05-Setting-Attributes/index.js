var  main = document.querySelector("main")
var sitesEl = document.querySelector(".sites")
var site1El = document.querySelector(".site1")
var site2El = document.querySelector(".site2")
var site3El = document.querySelector(".site3")
var siteTitles = document.querySelectorAll("h4")

var sites = ["https://twitter.com", "https://instagram.com", "https://google.com", "https://facebook.com"]

site1El.children[0].textContent = "Site 1"
site1El.children[1].setAttribute("href", "https://google.com")
site1El.children[1].children[0].setAttribute("src", "images/image_1.jpg")
site1El.children[1].children[0].setAttribute("alt", "Man Working")
site1El.children[1].children[0].setAttribute("style", "padding:30px;")




site2El.children[0].textContent = "Site 2"
site2El.children[1].setAttribute("href", "https://twitter.com")
site2El.children[1].children[0].setAttribute("src", "images/image_2.jpg")
site2El.children[1].children[0].setAttribute("alt", "Group Brainstorm")
site2El.children[1].children[0].setAttribute("style", "padding:30px;")




site3El.children[0].textContent = "Site 3"
site3El.children[1].setAttribute("href", "https://instagram.com")
site3El.children[1].children[0].setAttribute("src", "images/image_3.jpg")
site3El.children[1].children[0].setAttribute("alt", "Women Working")
site3El.children[1].children[0].setAttribute("style", "padding:30px;")

for (let i = 0; i < siteTitles.length; i++) {
    siteTitles[i].setAttribute("style", "text-decoration: underline; padding-left: 30px; font-size: 24px")
}

for (let i = 0; i < sites.length; i++) {
    site1El.children[1].setAttribute("href", sites[Math.floor(Math.random() * sites.length)])
    
}