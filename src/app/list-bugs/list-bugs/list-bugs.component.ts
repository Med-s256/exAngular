import { Component, OnInit } from '@angular/core';
import { MedecinService } from 'src/app/services/medecin.service';

@Component({
  selector: 'app-list-bugs',
  templateUrl: './list-bugs.component.html',
  styleUrls: ['./list-bugs.component.scss']
})
export class ListBugsComponent implements OnInit {
  bug!: any;
  constructor(private bugserv : MedecinService ) { }

  ngOnInit(): void {
    this.getBugs();
  }
  getBugs(): void{
    this.bugserv.getAllError().subscribe((res)=>{
      this.bug = res.data;
    })
  }

}
