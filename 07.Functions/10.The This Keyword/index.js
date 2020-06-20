/*
What is this? 
This references the object that is executing the current function. 
If the function is part of Object - we call it method, this references that Object itself.
==========================================================================================
If it is regular function, which means it is not part of an Object, this references to the 
global Object. Which is the Window object in the browsers and global in NODE.
==========================================================================================
Method => obj
function => global (window, global)
*/

const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.stop = function () {
  console.log(this);
};
video.stop();

function playVideo() {
  console.log(this);
}
playVideo();

/*When dealing with a regular function,
this by default references the global object,
but if you call a function, using the new operator, which is the case
for constructor functions, this will reference a new
empty object. */
function Video(title) {
  this.title = title;
  console.log(this);
}
const v = new Video("b");
