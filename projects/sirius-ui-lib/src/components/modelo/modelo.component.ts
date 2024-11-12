import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modelo',
  standalone: true,
  imports: [],
  // templateUrl: './modelo.component.html',
  template: `<p>modelo works!</p>`,
  styleUrl: './modelo.component.scss'
})
export class ModeloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
