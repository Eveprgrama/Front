export class Trabajos {
    id:number;
    imagen:string;
    pagina:string;
    categoria:string;
    fecha:string;
    url: string;

    constructor(imagen: string, pagina:string, categoria: string, fecha: string, url: string){
        this.imagen=imagen;
        this.pagina=pagina;
        this.categoria=categoria;
        this.fecha=fecha;
        this.url=url;
    }
}
