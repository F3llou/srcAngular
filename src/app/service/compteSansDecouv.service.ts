/*import {Injectable} from '@angular/core';
import {CompteSansDecouv} from "../modele/compteSansDecouv";
import {Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";

@Injectable()

export class CompteSansDecouvService{
	private apiUrl='http://localhost:8080/SpringAngularStartProject/compteSansDecouv/';

	constructor(private http:Http){}
	findAll():Observable<CompteSansDecouv[]>{
		return this.http.get(this.apiUrl)
		.map((res:Response)=> res.json())
		.catch((error:any)=>Observable.throw(error.json().error || 'server error'))	;
	}

	findById(id:number):Observable<CompteSansDecouv>{ 
		return  this.http.get(this.apiUrl +'/'+id)
		.map((res:Response)=>res.json())
		.catch((Error:any)=>Observable.throw(Error.json().error||'error'));
	} 
		
	saveCompteSansDecouv(compteSansDecouv:CompteSansDecouv):Observable<CompteSansDecouv>{ 
		return this.http.post(this.apiUrl,compteSansDecouv)
		.catch((error:any)=>Observable.throw(error.json().error ||'server error'));} 

	deleteById(id:number):Observable<boolean>{ 
		return this.http.delete(this.apiUrl+'/'+id)
		.map((res:Response)=>res.json())
		.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	} 



	updateCompteSansDecouv(compteSansDecouv:CompteSansDecouv):Observable<CompteSansDecouv>{ 
		return this.http.put(this.apiUrl +'/'+compteSansDecouv.id,compteSansDecouv)
		.map((res:Response)=>res.json())
		.catch((Error:any)=>Observable.throw(Error.json().error||'Server error'));
	} 
}

*/