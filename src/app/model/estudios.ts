export class Estudios {
    id?: number;
    instituto: string;
    inicio: string;
    fin: string;
    especializacion: string;
    descripcion: string;
    img: string;

constructor(inicio:string, fin:string, instituto:string, especializacion:string, descripcion:string, img:string){
    this.instituto = instituto;
    this.inicio = inicio;
    this.fin = fin;
    this.especializacion = especializacion;
    this.descripcion = descripcion;
    this.img = img;

}




}
