var ulElement = document.querySelector('div#app ul');
var btnElement = document.querySelector('div#app button');
var inputElement = document.querySelector('input');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    ulElement.innerHTML = ''; //apaga os valores dentro de <ul>

    for (todo of todos) {
        var tdElement = document.createElement('li');
        var textElement = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        linkElement.appendChild(document.createTextNode('Excluir'));

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        tdElement.appendChild(textElement);
        tdElement.appendChild(linkElement);
        ulElement.appendChild(tdElement);
    }    
}

renderTodos();

function addTodo() {
    textInput = inputElement.value;
    
    todos.push(textInput);
    inputElement.value = ''; //define o valor como vazio
    renderTodos();
    savoToStorage();
}

btnElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos,1); //a partir da pos remove 1 item
    renderTodos();
    savoToStorage();
}

function savoToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}