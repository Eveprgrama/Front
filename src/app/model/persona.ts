export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    titulo: string;

    constructor(nombre: string, apellido: string, img: string, titulo: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.titulo = titulo;

    }
}
