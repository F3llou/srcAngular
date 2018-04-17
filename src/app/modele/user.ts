export class  User {
	id:number;
	login:string;
	mdp: string;
	nom:string;
	prenom: string;
	address:string;
	email:string;
	numTel:string;
	dateDeb:Date;

	
	
	constructor(id:number,login:string, mdp:string,nom:string,prenom:string, address:string,
		email:string,numTel:string,dateDeb:Date){
		this.id=id;
		this.login=login;
		this.mdp=mdp;
		this.nom=nom;
		this.prenom=prenom;
		this.address=address;
		this.email=email;
		this.numTel=numTel;
		this.dateDeb=dateDeb;
	}
}
