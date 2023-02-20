function addTodo() {
    var gettingTodos = document.getElementById('todosHere').value;
    if (gettingTodos) {
        var myTodosFromLS = JSON.parse(localStorage.getItem("todos")) || [];
        myTodosFromLS.push(gettingTodos);
        console.log(myTodosFromLS, "myTodosFromLS");
        localStorage.setItem("Todos", JSON.stringify(myTodosFromLS))
        document.getElementById('todosHere').value = "";
        alert("Todo added !")
    }
    else {
        alert('Add todo first,before submitting !');
    }
}
function display() {
    var mainDiv = document.getElementById("displayTodos");
    var div = document.createElement("div");
    var h1 = document.createElement("h1"); h1.innerText = "structure created!"
    h1.style.color = "Red";
    div.append(h1);
    div.append(div);

}