document.body.innerHTML = "<h1>Hello World</h1>"; 
//you code here

// Your code here
let img = document.createElement("img");

// console.dir(img) => para acceder y ver las propiedas

img.setAttribute( "src", "https://via.placeholder.com/350x150" )

document.body.appendChild(img);