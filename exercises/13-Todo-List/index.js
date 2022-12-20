window.onload = function () {

    let count = 3;

    let button = document.getElementById("toDoBtn");
    console.log(button);

    let idTodo1 = document.getElementById("firstToDo");
    console.log(idTodo1);
  
  idTodo1.addEventListener("click", function () {
           ul.removeChild(idTodo1);
         })
  
   let idTodo2 = document.getElementById("secondToDo");
    console.log(idTodo1);
  
    idTodo2.addEventListener("click", function () {
           ul.removeChild(idTodo2);
         })
   let idTodo3 = document.getElementById("thirdToDo");
    console.log(idTodo1);
      idTodo3.addEventListener("click", function () {
           ul.removeChild(idTodo3);
         })

    let ul = document.getElementById("toDolist");
    console.log(ul);


    button.addEventListener('click', function () {

        
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



        // ------------------------- Eliminar a traves del ID generado


        icon.addEventListener("click", function () {
            ul.removeChild(li);
        })
    })
}