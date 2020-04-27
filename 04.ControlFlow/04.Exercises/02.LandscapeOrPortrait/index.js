function isLandscape(width, height) {
  // *8 return width > height ? true : false ** looks very amateurish. DON'T DO THIS !!!
  return width > height;
}

console.log(isLandscape(800, 600));
