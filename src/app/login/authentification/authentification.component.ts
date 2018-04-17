import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login.service";
import {Login}from"../../modele/login";
import {Auth} from "../../modele/auth";
import {User} from "../../modele/user";

import{ActivatedRoute,Router}from '@angular/router';
import{FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'],
  providers:[LoginService]
})
export class AuthentificationComponent implements OnInit {

  id:number;
  user:User;
  login:Login;
  loginForm:FormGroup;

  constructor(private route:ActivatedRoute,
    private router:Router,
    private loginService:LoginService) { }

  ngOnInit() {
  	 this.loginForm=new FormGroup({
      login:new FormControl('',Validators.required),
      mdp: new FormControl('', Validators.required)
    });

  }

  ngOnDestroy():void {

  }
  onSubmit(){
    console.log("on submit ok ")
  	if (this.loginForm.valid){

      let auth:Auth= new Auth(
        this.loginForm.controls['login'].value,
        this.loginForm.controls['mdp'].value);
        this.loginService.verifLogin(auth).subscribe(
          user=>{
            this.id = user.id;
            console.log("YESSSSSSSSSSSSSSSSSS");
            this.redirectLoginPage();
          });
    }

    this.loginForm.reset();


  }

  redirectLoginPage(){

    this.router.navigate(['/user']);
  }

}
