const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${todo}</span>
                    <i class="far fa-trash-alt delete"></i>
                  </li>`;

    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length) {
        generateTemplate(todo);
    }
    addForm.add.value = '';
});

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodos = term => {
    //transforma em array para ter propriedades como filter e foreach
    //o que as linhas abaixo fazem é filtar os que NAO estao na pesquisa
    //do input e adicionar uma classe 'filtered' neles
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    //nessa etapa é retirado a classe 'filtered' se o input mudar para um
    //char que o elemento tenha 
    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));        
};
//linhas 34 e 40 - pega o valor dentro do <spam> 

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});