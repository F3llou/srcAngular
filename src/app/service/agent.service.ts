import {Injectable} from '@angular/core';
import {Agent} from "../modele/agent";
import {Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";

@Injectable()

export class AgentService{
	private apiUrl='http://localhost:8080/SpringAngularStartProject/agent/';

	constructor(private http:Http){}
	findAll():Observable<Agent[]>{
		return this.http.get(this.apiUrl)
		.map((res:Response)=> res.json())
		.catch((error:any)=>Observable.throw(error.json().error || 'server error'))	;
	}

	findById(id:number):Observable<Agent>{ 
		return  this.http.get(this.apiUrl +'/'+id)
		.map((res:Response)=>res.json())
		.catch((Error:any)=>Observable.throw(Error.json().error||'error'));
	} 
		
	saveAgent(agent:Agent):Observable<Agent>{ 
		return this.http.post(this.apiUrl,agent)
		.catch((error:any)=>Observable.throw(error.json().error ||'server error'));} 

	deleteById(id:number):Observable<boolean>{ 
		return this.http.delete(this.apiUrl+'/'+id)
		.map((res:Response)=>res.json())
		.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
	} 



	updateAgent(agent:Agent):Observable<Agent>{ 
		return this.http.put(this.apiUrl +'/'+agent.id,agent)
		.map((res:Response)=>res.json())
		.catch((Error:any)=>Observable.throw(Error.json().error||'Server error'));
	} 
}

