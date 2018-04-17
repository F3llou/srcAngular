import { Component, OnInit, OnDestroy } from '@angular/core';
import {AgentService} from "../../service/agent.service";
import {Agent}from"../../modele/agent";
import{ActivatedRoute,Router}from '@angular/router';
import{FormControl,FormGroup,Validators} from '@angular/forms';



@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.css'],
  providers:[AgentService]
})
export class AgentDetailComponent implements OnInit {
  id:number;
  agent:Agent;
  agentForm:FormGroup;
  private sub: any;

  constructor(private route:ActivatedRoute,
    private router:Router,
    private agentService:AgentService) { }

  ngOnInit() {
    this.sub=this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.agentForm=new FormGroup({
      username:new FormControl('',Validators.required),
      prenom: new FormControl('', Validators.required),
      address: new FormControl('',Validators.required),
      email:new FormControl('',[
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
        ]),
      mdp: new FormControl('', Validators.required)
    });

    if (this.id) { //edit form
      this.agentService.findById(this.id).subscribe(
        agent => {
          this.id = agent.id;
          this.agentForm.patchValue({
            login: agent.login,
            mdp: agent.mdp,
            nom: agent.nom,
            prenom: agent.prenom,
            address: agent.address,
            email: agent.email,
            numTel: agent.numTel,
            dateDeb: agent.dateDeb,
            matricule:agent.matricule,
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
  	if (this.agentForm.valid){
      if(this.id){
        let agent: Agent= new Agent(this.id,
          this.agentForm.controls['login'].value,
          this.agentForm.controls['mdp'].value,
          this.agentForm.controls['nom'].value,
          this.agentForm.controls['prenom'].value,
          this.agentForm.controls['address'].value,
          this.agentForm.controls['email'].value,
          this.agentForm.controls['numTel'].value,
          this.agentForm.controls['dateDeb'].value,
        this.agentForm.controls['matricule'].value);
        this.agentService.updateAgent(agent).subscribe();
      } else {

        let agent:Agent= new Agent(null,
          this.agentForm.controls['login'].value,
          this.agentForm.controls['mdp'].value,
          this.agentForm.controls['nom'].value,
          this.agentForm.controls['prenom'].value,
          this.agentForm.controls['address'].value,
          this.agentForm.controls['email'].value,
          this.agentForm.controls['numTel'].value,
          this.agentForm.controls['dateDeb'].value,
        this.agentForm.controls['matricule'].value);
        this.agentService.saveAgent(agent).subscribe(value=>this.redirectUserPage());
      }
    }

    this.agentForm.reset();
    //this.router.navigate(['/agent']);

}

redirectUserPage(){
	this.router.navigate(['/agent']);
}

}

