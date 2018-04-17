/*import {Injectable} from '@angular/core';
import {CompteAvecDecouv} from "../modele/compteAvecDecouv";
import {Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";

@Injectable()

export class CompteAvecDecouvService{
	private apiUrl='http://localhost:8080/SpringAngularStartProject/compteAvecDecouv/';

	constructor(private http:Http){}
	findAll():Observable<CompteAvecDecouv[]>{
		return this.http.get(this.apiUrl)
		.map((res:Response)=> res.json())
		.catch((error:any)=>Observable.throw(error.json().error || 'server error'))	;
	}

	findById(id:number):Observable<CompteAvecDecouv>{ 
		return  this.http.get(this.apiUrl +'/'+id)
		.map((res:Response)=>res.json())
		.catch((Error:any)=>Observable.throw(Error.json().error||'error'));
	} 
		
	saveCompteAvecDecouv(compteAvecDecouv:CompteAvecDecouv):Observable<CompteAvecDecouv>{ 
		return this.http.post(this.apiUrl,compteAvecDecouv)
		.catch((error:any)=>Observable.throw(error.json().error ||'server error'));} 

	deleteById(id:number):Observable<boolean>{ 
		return this.http.delete(this.apiUrl+'/'+id)
		.map((res:Response)=>res.json())
		.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	} 



	updateCompteAvecDecouv(compteAvecDecouv:CompteAvecDecouv):Observable<CompteAvecDecouv>{ 
		return this.http.put(this.apiUrl +'/'+compteAvecDecouv.id,compteAvecDecouv)
		.map((res:Response)=>res.json())
		.catch((Error:any)=>Observable.throw(Error.json().error||'Server error'));
	} 
}

*/