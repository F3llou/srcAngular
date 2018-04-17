
import { Compte } from './compte';

export class  compteRemun extends Compte  {
	tauxInteret:number;
	dateRemun:Date;
	
	constructor(id:number,solde:number,dateDeb:Date,tauxInteret:number,dateRemun:Date) {
		super(id, solde, dateDeb);

		this.tauxInteret=tauxInteret;
		this.dateRemun=dateRemun;
	
	}
}
