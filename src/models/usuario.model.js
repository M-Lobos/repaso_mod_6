import { v4 as uuidv4 } from "uuid";
import { createDataFile } from "../utils/utils.file";


export class Usuario {
    #id;
    #prop1;
    #prop2;
    #prop3;
    #active;

    constructor(prop1, prop2, prop3) {
        this.#id = uuidv4();
        this.#prop1 = prop1;
        this.#prop2 = prop2;
        this.#prop3 = prop3;
        this.#active = true;
    }

    //getters
    get id() {
        return this.#id
    }

    get prop1() {
        return this.#prop1
    }

    get prop2() {
        return this.#prop2
    }

    get prop3() {
        return this.#prop3
    }

    get active() {
        return this.#active
    }

    //setters
    setId(newId) {
        this.#id = newId
    }

    setprop1(newProp1) {
        this.#prop1 = newProp1
    }

    setprop1(newProp2) {
        this.#prop2 = newProp2
    }

    setprop1(newProp3) {
        this.#prop3 = newProp3
    }

    desactive() {
        console.log(this.#active)
        this.#active = false
    }

    active() {
        this.#active = true
    }

    getAllProperties() {
        return {
            id: this.#id,
            prop1: this.#prop1,
            prop2: this.#prop2,
            prop3: this.#prop3,
            active: this.#active
        }
    }

    static formatearInstancia(objeto) {
        try {
            const {id, prop1, prop2, prop3} = objeto;
            const nuevaInstancia = new Usuario(prop1, prop2, prop3);
            nuevaInstancia.setId(id);

            return nuevaInstancia
        } catch (error) {
            throw new Error("Error: Problemas para formatear la instancia usuario", error)
        }
    }

    static async crear(data) {
        try {
            const{prop1, prop2, prop3} = data;
            const usuario = new Usuario(prop1, prop2, prop3);
            const usuarioObject = usuario.getAllProperties();;
            await createDataFile(usuarioObject, 'usuario.json');

            return usuarioObject;

        } catch (error) {
            throw new Error('Error al crear un nuevo ususario', error);
        }
    }

    
}
