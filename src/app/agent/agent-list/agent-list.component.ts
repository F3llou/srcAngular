import { Component, OnInit } from '@angular/core';
import{ Agent}from "../../modele/agent";
import { AgentService} from "../../service/agent.service";
import {Router} from '@angular/router';




@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css'],
  providers:[AgentService]
})
export class AgentListComponent implements OnInit {
	private agents:Agent[];

  constructor(private router:Router,
    private agentService:AgentService) { }
  ngOnInit() {
  	this.getAllAgents();
  }
  getAllAgents(){
    this.agentService.findAll().subscribe(
      agents=>{
        this.agents=agents;

      },
      err=>{
        console.log(err);
      }
      );
  }
  redirectNewAgentPage(){
    this.router.navigate (['/agent/create']);
  }

  editAgentPage(agent:Agent){
    if(agent)
      this.router.navigate(['/agent/edit',agent.id]);
  }

  deleteUser(agent:Agent) 
  {
    if (agent) {
      this.agentService.deleteById(agent.id).subscribe(
        res=> {
          this.getAllAgents();
          this.router.navigate(['/agent']);
          console.log('done');
        })
    }
  }
}