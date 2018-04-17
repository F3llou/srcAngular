import {Injectable} from '@angular/core';
import {Client} from "../modele/client";
import {Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";
import {ClientForm} from "../modele/clientForm";

@Injectable()

export class ClientService{
	private apiUrl='http://localhost:8080/SpringAngularStartProject/client/';

	constructor(private http:Http){}
	findAll():Observable<Client[]>{
		return this.http.get(this.apiUrl)
		.map((res:Response)=> res.json())
		.catch((error:any)=>Observable.throw(error.json().error || 'server error'))	;
	}

	findById(id:number):Observable<Client>{ 
		return  this.http.get(this.apiUrl +'/'+id)
		.map((res:Response)=>res.json())
		.catch((Error:any)=>Observable.throw(Error.json().error||'error'));
	} 
		
	saveClient(client:Client):Observable<Client>{ 
		return this.http.post(this.apiUrl,client)
		.catch((error:any)=>Observable.throw(error.json().error ||'server error'));} 

	saveClientForm(client:ClientForm):Observable<ClientForm>{
		return this.http.post(this.apiUrl,client)
		.catch((error:any)=>Observable.throw(error.json().error ||'server error'));
	}

	deleteById(id:number):Observable<boolean>{ 
		return this.http.delete(this.apiUrl+'/'+id)
		.map((res:Response)=>res.json())
		.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	} 

	updateclientForm(client:ClientForm):Observable<ClientForm>{ 
		return this.http.put(this.apiUrl +'/'+client.id,client)
		.map((res:Response)=>res.json())
		.catch((Error:any)=>Observable.throw(Error.json().error||'Server error'));
	} 

	updateclient(client:Client):Observable<Client>{ 
		return this.http.put(this.apiUrl +'/'+client.id,client)
		.map((res:Response)=>res.json())
		.catch((Error:any)=>Observable.throw(Error.json().error||'Server error'));
	} 
}

