export class Bug {
    name!: string;
    type!: string;
    number!: number;
    num_ligne!: string;
    file!: string;
    constructor(name: string, type: string, number: number, num_ligne: string, file: string){
        this.name= name;
        this.type= type;
        this.number= number;
        this.num_ligne= num_ligne;
        this.file= file;
    }
}