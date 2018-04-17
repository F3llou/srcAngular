export class  UserForm {
	id:number;
	login:string;
	mdp: string;
	nom:string;
	prenom: string;
	address:string;
	email:string;
	numTel:string;
	
	constructor(id:number,login:string, mdp:string,nom:string,prenom:string, address:string,
		email:string,numTel:string){
		this.id=id;
		this.login=login;
		this.mdp=mdp;
		this.nom=nom;
		this.prenom=prenom;
		this.address=address;
		this.email=email;
		this.numTel=numTel;
	}
}
