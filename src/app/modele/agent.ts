import { User } from './user';

export class  Agent extends User  {
	
	matricule: number;

	constructor(id:number,login:string, mdp:string,nom:string,prenom:string, address:string,
		email:string,numTel:string,dateDeb:Date, matricule: number) {
		super(id,login, mdp,nom,prenom, address,
		email,numTel,dateDeb);
		this.matricule=matricule;
	}
}
