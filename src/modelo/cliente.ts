export class Cliente{
    id: number;
    nome: string;
    email: string;
    anoNacimento:number;

    constructor(id: number, nome: string, 
        email:string, anoNacimento:number){

        this.id = id;
        this.nome = nome;
        this.email = email;
        this.anoNacimento = anoNacimento;
    }
}