function addTodo() {
    var gettingTodos = document.getElementById('todosHere').value;
    if (gettingTodos) {
        var myTodosFromLS = JSON.parse(localStorage.getItem("Todos")) || [];
        myTodosFromLS.push(gettingTodos);
        // console.log(myTodosFromLS, "myTodosFromLS");
        localStorage.setItem("Todos", JSON.stringify(myTodosFromLS));
        document.getElementById('todosHere').value = " ";
        alert("Todo added !");
    } else {
        alert('Add todo first, before submitting!');
    }
}

function cs() {
    var divFromHtml = document.getElementById("displayTodos")

    var gettingTodosFromLS = JSON.parse(localStorage.getItem("Todos"));
    console.log(gettingTodosFromLS, "gettingTodosFromLS")

    var finalStructure = []
    for (var i = 0; i < gettingTodosFromLS.length; i++) {
        finalStructure += `<div id = "row">
        <p>${gettingTodosFromLS[i]}</p>
        <i id="delete" onclick= "deleteDodo(${i})" class="fa-solid fa-trash"></i>
        </div>`
    }
    divFromHtml.innerHTML = finalStructure;
}

cs();
function deleteDodo(todoIndex) {
    console.log(todoIndex);
    var myTodosFromLS = JSON.parse(localStorage.getItem("Todos"));
    myTodosFromLS.splice(todoIndex, 1)
    localStorage.setItem("Todos", JSON.stringify(myTodosFromLS))
    cs();
}