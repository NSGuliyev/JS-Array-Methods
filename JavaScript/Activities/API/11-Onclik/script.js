var countEl = document.getElementById("count");
var decrementEl = document.getElementById("decrement");
var incrementEl = document.getElementById("increment");
var count = 0;



incrementEl.addEventListener("click", function(){
    count++;
    countEl.textContent = count;
})

decrementEl.addEventListener("click", function(){
    if (count > 0) {
        count--;
        countEl.textContent = count;
    }
})
