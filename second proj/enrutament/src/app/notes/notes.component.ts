import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {


  notes = [
    {
      'id': 1,
      'nom': 'nota 1',
    },
    {
      'id': 2,
      'nom': 'nota 2',
    },
    {
      'id': 3,
      'nom': 'nota 3',
    },
    {
      'id': 4,
      'nom': 'nota 4',
    },
  ]
  constructor() { }

  ngOnInit() {
  }


}
