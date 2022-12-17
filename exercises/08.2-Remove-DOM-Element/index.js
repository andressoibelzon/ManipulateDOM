let list = document.querySelector("#parentLi")
let childs = list.childNodes[3]
list.removeChild(childs)

console.log(list)
console.log(childs)
