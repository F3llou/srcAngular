import { Component, OnInit } from '@angular/core';
import{ Compte}from "../modele/compte";
import { CompteService} from "../service/compte.service";
import {ActivatedRoute,Router} from '@angular/router';
import {Client} from '../modele/client';


@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.css'],
  providers:[CompteService]
})


export class CompteListComponent implements OnInit {
	private comptes:Compte[];
  id:number;
  private sub: any;
  private client:Client;

  constructor(private route:ActivatedRoute,private router:Router, private compteService:CompteService) { }
  
  ngOnInit() {
  	this.getAllComptes();
    this.sub=this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    if (this.id) { //edit form
      this.compteService.findClientById(this.id).subscribe(
        client => {
          this.id = client.id;
          }, error => {
          console.log(error);
        }
        );
    }
  }
  
  ngOnDestroy():void {
    this.sub.unsubscribe();
  }

  getAllComptes(){
    this.compteService.findClientById(this.id).subscribe(
      comptes=>{
        this.comptes=this.client.listComptes;

      },
      err=>{
        console.log(err);
      }
      );
  }
  
  redirectNewComptePage(){
    this.router.navigate (['/compte/create']);
  }

  editComptePage(compte:Compte){
    if(compte){
      this.router.navigate(['/compte/edit',compte.id]);
    }
  }

  deleteCompte(compte:Compte) 
  {
    if (compte) {
      this.compteService.deleteById(compte.id).subscribe(
        res=> {
          this.getAllComptes();
          this.router.navigate(['/comptes']);
          console.log('done');
        })
    }
  }
}