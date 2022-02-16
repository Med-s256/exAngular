import { Component, Input, OnInit } from '@angular/core';
import { Bug } from 'src/app/models/bug';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.scss']
})
export class BugComponent implements OnInit {
  @Input() bugs!: Bug[];
  constructor() { }

  ngOnInit(): void {
  }

}
