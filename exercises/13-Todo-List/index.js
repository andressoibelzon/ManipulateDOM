window.onload = function () {

    let count = 3;

let button = document.getElementById("toDoBtn");
console.log(button);

button.addEventListener('click', function () {

    let ul = document.getElementById("toDolist");
    console.log(ul);
    let input = document.getElementById("addToDo");
    console.log(input);
    
    count += 1;

    let value = input.value;
    console.log(value)
    
    
    let li = document.createElement("li");
    li.setAttribute("id", count)
    
    let span = document.createElement("span");
    let icon = document.createElement("i");
    icon.setAttribute("class", "fa fa-trash");
    
    span.appendChild(icon);
    li.appendChild(span); 
  
    li.appendChild(document.createTextNode(" " + value));
    ul.appendChild(li);
})
}
