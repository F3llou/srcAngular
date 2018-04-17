import { Component, OnInit, OnDestroy } from '@angular/core';
import {UserService} from "../../service/user.service";
import {User}from"../../modele/user";
import{ActivatedRoute,Router}from '@angular/router';
import{FormControl,FormGroup,Validators} from '@angular/forms';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers:[UserService]
})
export class UserDetailComponent implements OnInit {
  id:number;
  user:User;
  userForm:FormGroup;
  private sub: any;

  constructor(private route:ActivatedRoute,
    private router:Router,
    private userService:UserService) { }

  ngOnInit() {
    this.sub=this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.userForm=new FormGroup({
      login:new FormControl('',Validators.required),
      mdp: new FormControl('', Validators.required),   
      nom:new FormControl('',Validators.required),
      prenom: new FormControl('', Validators.required),
      address: new FormControl('',Validators.required),
      email:new FormControl('',[
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
        ]),
      
      numTel:new FormControl('',Validators.required),
       dateDeb:new FormControl('',Validators.required),
 });
    if (this.id) { //edit form
      this.userService.findById(this.id).subscribe(
        user => {
          this.id = user.id;
          this.userForm.patchValue({
            login: user.login,
            mdp: user.mdp,
            nom: user.nom,
            prenom: user.prenom,
            address: user.address,
            email: user.email,
            numTel: user.numTel,
            dateDeb: user.dateDeb,
          });
        }, error => {
          console.log(error);
        }
        );
    }
  }
  ngOnDestroy():void {
    this.sub.unsubscribe();
  }
  onSubmit(){
  	if (this.userForm.valid){
      if(this.id){
        let user: User= new User(this.id,
          this.userForm.controls['login'].value,
          this.userForm.controls['mdp'].value,
          this.userForm.controls['nom'].value,
          this.userForm.controls['prenom'].value,
          this.userForm.controls['address'].value,
          this.userForm.controls['email'].value,
          this.userForm.controls['numTel'].value,
          this.userForm.controls['dateDeb'].value);

        this.userService.updateUser(user).subscribe();
      } else {

        let user:User= new User(null,
          this.userForm.controls['login'].value,
          this.userForm.controls['mdp'].value,
          this.userForm.controls['nom'].value,
          this.userForm.controls['prenom'].value,
          this.userForm.controls['address'].value,
          this.userForm.controls['email'].value,
          this.userForm.controls['numTel'].value,
          this.userForm.controls['dateDeb'].value);
        this.userService.saveUser(user).subscribe(value=>this.redirectUserPage());
      }
    }

    this.userForm.reset();
    this.router.navigate(['/user']);

}

redirectUserPage(){
	this.router.navigate(['/user']);
}

}

