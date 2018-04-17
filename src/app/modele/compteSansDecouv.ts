import { Compte } from './compte';

export class  CompteSansDecouv extends Compte  {
	
	constructor(id:number,solde:number,dateDeb:Date) {
		super(id, solde, dateDeb);
	
	}
}
