export class Softskills {
    id: number;
    habilidad: string;
    imagen: string;
    descripcion: string;

    constructor(habilidad: string, imagen:string, descripcion: string){
        this.habilidad=habilidad;
        this.imagen=imagen;
        this.descripcion=descripcion;
    }

}
