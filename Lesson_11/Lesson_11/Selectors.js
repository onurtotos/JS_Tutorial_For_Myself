

//Selectors (Seciciler)


//classname, id , tag name

// id ==> getElementById

//let value;
//value = document.getElementById("todoAddButton");
//console.log(value);
//console.log(value.id);
//console.log(value.getAttribute("id"));
//console.log(value.className);
//console.log(value.getAttribute("class"));
//console.log(value.classList);
//console.log(value.classList[2]);



//value.textContent = "<b>textContent</b>";
//console.log(value.textContent);
//value.innerHTML = "<b> text Content </b>";
//console.log(value.innerHTML);


//// class==> getElementByClassName

//const todoList = Array.from(document.getElementsByClassName("list-group-item"));
//console.log(todoList);


////tagName ==> getElementByTagName

//const forms = document.getElementsByTagName("form");
//console.log(forms);

////querySelector - querySelectorAll
//const clearButton = document.querySelector("#clearButton");
//console.log(clearButton);

//const todoList1 = document.querySelector(".list-group");
//console.log(todoList1);

//const todoList2 = document.querySelectorAll(".list-group-item");
//console.log(todoList2);

//const todoList3 = document.querySelectorAll(".list-group-item")[1];
//console.log(todoList3);

const todoList4 = Array.from(document.querySelectorAll("li:nth-child(even)"));

todoList4.forEach(function(todo){
    todo.style.backgroundColor = "red";
    
})
console.log(todoList4);