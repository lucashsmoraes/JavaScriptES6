class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}



class TodoList extends List{
    constructor(){
        super()
        this.usuario = 'Lucas'
    }

    mostrarUsuario(){
        console.log(this.usuario)
    }
}

const MinhaLista = new TodoList();

document.getElementById("novo-todo").onclick = function() {
  MinhaLista.add("Novo - todo");
};

MinhaLista.mostrarUsuario()
