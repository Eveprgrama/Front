export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    inicio : string;
    fin : string;
    localidad : string;
    img: string;
    

    constructor(nombreE: string, descripcionE: string, inicio:string, fin:string, localidad:string, img:string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.inicio = inicio;
        this.fin = fin;
        this.localidad = localidad;
        this.img = img;
    }
}
