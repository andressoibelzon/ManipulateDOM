
    window.onload = function(){
    
    let button = document.getElementById("submit");
    console.log(button);
    let input = document.getElementById("addToDo");
    console.log(input);

    button.addEventListener('click', function() {
        let ul = document.getElementById("list"); 
        
        console.log(ul);
        
        let paragraph = document.createElement("input");
        paragraph.innerHTML = input.value;
        ul.appendchild(paragraph);
        

    })
    }