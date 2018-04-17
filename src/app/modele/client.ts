import { User } from './user';
import { Compte } from './compte';

export class  Client extends User {
	nbEnfant:number;
	situationMaritale:string;

	listComptes:Compte[];

	constructor(id:number,login:string, mdp:string,nom:string,prenom:string, address:string,
		email:string,numTel:string,dateDeb:Date, nbEnfant:number,situationMaritale:string, listComptes:Compte[]) {
		super(id,login, mdp,nom,prenom, address,
		email,numTel,dateDeb);
		this.nbEnfant=nbEnfant;
		this.situationMaritale=situationMaritale;
		this.listComptes=listComptes;
	}
}
