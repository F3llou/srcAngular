import { Component, OnInit, OnDestroy } from '@angular/core';
import {ClientService} from "../../service/client.service";
import {ClientForm}from"../../modele/clientForm";
import{ActivatedRoute,Router}from '@angular/router';
import{FormControl,FormGroup,Validators} from '@angular/forms';


@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
  providers:[ClientService]
})

export class ClientDetailComponent implements OnInit {
  id:number;
  client:ClientForm;
  clientForm:FormGroup;
  private sub: any;

  constructor(private route:ActivatedRoute,
    private router:Router,
    private clientService:ClientService) { }

  ngOnInit() {
    this.sub=this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.clientForm=new FormGroup({
      login: new FormControl('', Validators.required),
      nom:new FormControl('',Validators.required),
      prenom: new FormControl('', Validators.required),
      address: new FormControl('',Validators.required),
      email:new FormControl('',[
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
        ]),
      mdp: new FormControl('', Validators.required),
      numTel: new FormControl('', Validators.required),
      nbEnfant: new FormControl('', Validators.required),
      situationMaritale: new FormControl('', Validators.required),
      dateDeb: new FormControl('', Validators.required)
    });

    if (this.id) { //edit form
      this.clientService.findById(this.id).subscribe(
        client => {
          this.id = client.id;
          this.clientForm.patchValue({
            login: client.login,
            nom: client.nom,
            prenom: client.prenom,
            address: client.address,
            email: client.email,
            mdp: client.mdp,
            numTel: client.numTel,
            nbEnfant: client.nbEnfant,
            situationMaritale: client.situationMaritale,
            dateDeb: client.dateDeb
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
  	if (this.clientForm.valid){
      if(this.id){
        let client: ClientForm= new ClientForm(this.id,
          this.clientForm.controls['login'].value,
          this.clientForm.controls['nom'].value,
          this.clientForm.controls['prenom'].value,
          this.clientForm.controls['address'].value,
          this.clientForm.controls['email'].value,
          this.clientForm.controls['mdp'].value,
          this.clientForm.controls['numTel'].value,
          this.clientForm.controls['nbEnfant'].value,
          this.clientForm.controls['situationMaritale'].value);
        this.clientService.updateclientForm(client).subscribe();
      } else {

        let client:ClientForm= new ClientForm(null,
          this.clientForm.controls['login'].value,
          this.clientForm.controls['nom'].value,
          this.clientForm.controls['prenom'].value,
          this.clientForm.controls['address'].value,
          this.clientForm.controls['email'].value,
          this.clientForm.controls['mdp'].value,
          this.clientForm.controls['numTel'].value,
          this.clientForm.controls['nbEnfant'].value,
          this.clientForm.controls['situationMaritale'].value);
        this.clientService.saveClientForm(client).subscribe(value=>this.redirectClientPage());
      }
    }

    this.clientForm.reset();
    //this.router.navigate(['/client']);

}

redirectClientPage(){
	this.router.navigate(['/client']);
}

}

