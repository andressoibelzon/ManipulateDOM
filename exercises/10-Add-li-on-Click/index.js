let button = document.querySelector("#superDuperButton");
let ul = document.querySelector("#myList");

button.addEventListener("click", function() {

let li = document.createElement("li");
li.innerHTML = "Forth element"

ul.appendChild(li)

});


