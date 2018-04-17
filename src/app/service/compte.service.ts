import {Injectable} from '@angular/core';
import {Compte} from "../modele/compte";
import {Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {Client} from '../modele/client';

@Injectable()

export class CompteService{
	private apiUrl='http://localhost:8080/SpringAngularStartProject/compte';
	private clientUrl='http://localhost:8080/SpringAngularStartProject/client';

	constructor(private http:Http){}
	 findAll():Observable<Compte[]>{
	 	return this.http.get(this.apiUrl)
	 	.map((res:Response)=> res.json())
	 	.catch((error:any)=>Observable.throw(error.json().error || 'server error'))	;
	 }

	 findById(id:number):Observable<Compte>{ 
	 	return  this.http.get(this.apiUrl +'/'+id)
	 	.map((res:Response)=>res.json())
	 	.catch((Error:any)=>Observable.throw(Error.json().error||'error'));
	 } 
		
	 saveCompte(compte:Compte):Observable<Compte>{ 
	 	return this.http.post(this.apiUrl,compte)
	 	.catch((error:any)=>Observable.throw(error.json().error ||'server error'));} 

	 deleteById(id:number):Observable<boolean>{ 
	 	return this.http.delete(this.apiUrl+'/'+id)
	 	.map((res:Response)=>res.json())
	 	.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	 } 

	findClientById(id:number):Observable<Client>{
	 	return this.http.get(this.clientUrl+'/'+id)
	 	.map((res:Response)=> res.json())
	 	.catch((error:any)=>Observable.throw(error.json().error || 'server error'))	;
	 }

	 updateCompte(compte:Compte):Observable<Compte>{ 
	 	return this.http.put(this.apiUrl +'/'+compte.id,compte)
	 	.map((res:Response)=>res.json())
	 	.catch((Error:any)=>Observable.throw(Error.json().error||'Server error'));
	 } 
}

