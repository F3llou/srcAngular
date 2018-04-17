import {Injectable} from '@angular/core';
import {Login} from "../modele/login";
import {User} from "../modele/user";
import {Auth} from "../modele/auth";
import {Http,Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService{
	private apiUrl='http://localhost:8080/SpringAngularStartProject/login';
	
	
	constructor(private http:Http){}

	findAllLogin():Observable<Login[]>{
		return this.http.get(this.apiUrl)
		.map((res:Response)=> res.json())
		.catch((error:any)=>Observable.throw(error.json().error || 'server error'))	;
	}

		
	saveLogin(login:Login):Observable<Login>{ 
		return this.http.post(this.apiUrl,login)
		.catch((error:any)=>Observable.throw(error.json().error ||'server error'));} 


	// apelle a cette url 
	// http://localhost:8080/SpringAngularStartProject/login/verified/
	verifLogin(auth:Auth):Observable<User>{
		return this.http.post(this.apiUrl+'/verified',auth)
		.catch((error:any)=>Observable.throw(error.json().error ||'server error'));}  
	}

