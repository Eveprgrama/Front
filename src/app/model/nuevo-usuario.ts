export class NuevoUsuario {
    nombre: string;
    nombreUsuario: string
    email: string;
    password: string;
    authorities: string[];

    constructor(nombre: string, nombreUsuario: string, password:string, email:string){
        this.nombreUsuario = nombreUsuario;
        this.password = password;
        this.nombre = nombre;
        this.email = email;

    }
}
