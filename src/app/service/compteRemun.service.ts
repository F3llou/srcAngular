/*import {Injectable} from '@angular/core';
import {CompteRemun} from "../modele/compteRemun";
import {Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";

@Injectable()

export class CompteRemunService{
	private apiUrl='http://localhost:8080/SpringAngularStartProject/compteRemun/';

	constructor(private http:Http){}
	findAll():Observable<CompteRemun[]>{
		return this.http.get(this.apiUrl)
		.map((res:Response)=> res.json())
		.catch((error:any)=>Observable.throw(error.json().error || 'server error'))	;
	}

	findById(id:number):Observable<CompteRemun>{ 
		return  this.http.get(this.apiUrl +'/'+id)
		.map((res:Response)=>res.json())
		.catch((Error:any)=>Observable.throw(Error.json().error||'error'));
	} 
		
	saveCompteRemun(compteRemun:CompteRemun):Observable<CompteRemun>{ 
		return this.http.post(this.apiUrl,compteRemun)
		.catch((error:any)=>Observable.throw(error.json().error ||'server error'));} 

	deleteById(id:number):Observable<boolean>{ 
		return this.http.delete(this.apiUrl+'/'+id)
		.map((res:Response)=>res.json())
		.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	} 



	updateCompteRemun(compteRemun:CompteRemun):Observable<CompteRemun>{ 
		return this.http.put(this.apiUrl +'/'+compteRemun.id,compteRemun)
		.map((res:Response)=>res.json())
		.catch((Error:any)=>Observable.throw(Error.json().error||'Server error'));
	} 
}

*/