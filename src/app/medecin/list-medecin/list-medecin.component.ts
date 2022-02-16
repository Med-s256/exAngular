import { Component, Input, OnInit } from '@angular/core';
import { Medecin } from 'src/app/models/medecin';
import { MedecinService } from 'src/app/services/medecin.service';

@Component({
  selector: 'app-list-medecin',
  templateUrl: './list-medecin.component.html',
  styleUrls: ['./list-medecin.component.scss']
})
export class ListMedecinComponent implements OnInit {
   medecin!: any;
  // @Input() medecin1!: Medecin;
  // @Input() medecin2!: Medecin;

  constructor(private medecinSer: MedecinService ) { }

  ngOnInit(): void {
    this.getMedecins();

  }
  getMedecins(): void{
    
    this.medecinSer.getAllMedecins().subscribe((res)=>{
      
      this.medecin= res.data ;

      
    });
  }

}
