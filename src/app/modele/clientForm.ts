import { UserForm } from './userForm';
import { Compte } from './compte';

export class  ClientForm extends UserForm {
	nbEnfant:number;
	situationMaritale:string;

	constructor(id:number,login:string, mdp:string,nom:string,prenom:string, address:string,
		email:string,numTel:string, nbEnfant:number,situationMaritale:string) {
		super(id,login, mdp,nom,prenom, address,
		email,numTel);
		this.nbEnfant=nbEnfant;
		this.situationMaritale=situationMaritale;
	}
}
