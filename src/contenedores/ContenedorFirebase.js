import admin from 'firebase-admin';
import config from '../config.js';

admin.initializeApp({
    credential: admin.credential.cert(config.firebase),
})

const db = admin.firestore();

class ContenedorFirebase {
    constructor(nombreColeccion) {
        this.coleccion = db.collection(nombreColeccion);
    }

    //listar por id
    async listar(id) {
        try {
            const doc = await this.coleccion.doc(id).get();
            if (!doc.exists) {
                throw new Error(`No se encontró el documento con id ${id}`);
            } else {
                const data = doc.data();
                return { ...data, id }
            }
        } catch (error) {
            throw new Error(`Error al obtener el documento con id ${id}: ${error}`);
        }
    }

    //listar todos
    async listarTodos() {
        try {
            const result = [];
            const snapshot = await this.coleccion.get();
            snapshot.forEach(doc => {
                const data = doc.data();
                result.push({ ...data, id: doc.id });
            });
            return result;
        } catch (error) {
            throw new Error(`Error al obtener los documentos: ${error}`);
        }
    }

    //guardar datos
    async guardar(data) {
        try {
            const doc = await this.coleccion.add(data);
            return { ...data, id: doc.id };
        } catch (error) {
            throw new Error(`Error al guardar el documento: ${error}`);
        }
    }

    //actualizar elemento
    async actualizar(nuevoElemento) {
        try {
            const actualizado = await this.coleccion.doc(nuevoElemento.id).set(nuevoElemento);
            return actualizado
        } catch (error) {
            throw new Error(`Error al actualizar el documento: ${error}`);
        }
    }

    //borrar elemento
    async borrar(id) {
        try {
            const item = await this.coleccion.doc(id).delete();
            return item;
        } catch (error) {
            throw new Error(`Error al borrar el documento: ${error}`);
        }
    }

    //borrar todos
    async borrarTodos() {
        try {
            const snapshot = await this.coleccion.get();
            snapshot.forEach(doc => {
                doc.ref.delete();
            });
        } catch (error) {
            throw new Error(`Error al borrar los documentos: ${error}`);
        }
    }
}

export default ContenedorFirebase;