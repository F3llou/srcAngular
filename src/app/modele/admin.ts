import { User } from './user';

export class  Admin extends User {
	
	
	constructor(id:number,login:string, mdp:string,nom:string,prenom:string, address:string,
		email:string,numTel:string,dateDeb:Date) {
		super(id,login, mdp,nom,prenom, address,
		email,numTel,dateDeb);
		
	}
}
