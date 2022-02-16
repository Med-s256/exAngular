import { Component, Input, OnInit } from '@angular/core';
import { Medecin } from 'src/app/models/medecin';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.scss']
})
export class MedecinComponent implements OnInit {
  @Input() med!: Medecin[];
  constructor() { }

  ngOnInit(): void {
  }

}
