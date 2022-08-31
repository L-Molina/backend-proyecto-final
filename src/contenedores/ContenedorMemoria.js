class ContenedorMemoria {
    constructor() {
      this.elementos = [];
    }

    //listar elemento
    listar(id) {
        const elem = this.elementos.find(elem => elem.id == id);
        if (!elem) {
            throw new Error(`No se encontró el elemento con id ${id}`);
        } else {
            return elem;
        }
    }

    //listar todos
    listarTodos() {
        return [...this.elementos];
    }
    
    //guardar datos
    guardar(data) {
        let newId
        if (this.elementos.length == 0) {
            newId = 1;
        } else {
            newId = this.elementos[this.elementos.length - 1].id + 1;
        }
        const nuevoElemento = { ...data, id: newId };
        this.elementos.push(nuevoElemento);
        return nuevoElemento;
    }

    //actualizar elemento
    actualizar(elemento) {
        const index = this.elementos.findIndex(elem => elem.id == elemento.id);
        if (index == -1) {
            throw new Error(`No se encontró el elemento con id ${elemento.id}`);
        } else {
            this.elementos[index] = elemento;
            return elemento;
        }
    }

    //borrar elemento
    borrar(id) {
        const index = this.elementos.findIndex(elem => elem.id == id);
        if (index == -1) {
            throw new Error(`No se encontró el elemento con id ${id}`);
        } else {
            this.elementos.splice(index, 1);
        }
    }

    //borrar todos
    borrarTodos() {
        this.elementos = [];
    }
}

export default ContenedorMemoria;