
import { Compte } from './compte';

export class  compteAvecDecouv extends Compte  {
	decouvert:number;
	dateDecouv:Date;
	
	constructor(id:number,solde:number,dateDeb:Date,decouvert:number,dateDecouv:Date) {
		super(id, solde, dateDeb);

		this.decouvert=decouvert;
		this.dateDecouv=dateDecouv;
	
	}
}
