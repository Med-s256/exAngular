export class Medecin {
    name!: string;
    specialite!: string;
    photo!: string;
    num_tel!: string;
    email!: string;
    constructor(name: string, specialite: string, photo: string, num_tel: string, email: string){
        this.name= name;
        this.specialite= specialite;
        this.photo= photo;
        this.num_tel= num_tel;
        this.email= email;
    }
}
