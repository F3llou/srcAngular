
export class  Compte {
	id:number;
	solde:number;
	dateDeb:Date;
	
	constructor(id:number,solde:number,dateDeb:Date){
		this.id=id;
		this.solde=solde;
		this.dateDeb=dateDeb;
	}
}
