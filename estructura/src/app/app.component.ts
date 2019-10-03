import { Component, OnInit } from '@angular/core';
import { ServeiService } from './services/servei.service';
import { Coche } from './entities/coche';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'estructura';
  cotxes: Coche[] = [];
  llistaCompra = [
    {
      nom: "Banana",
      preu: 2,
    },
    {
      nom: "Pera",
      preu: 3,
    },
    {
      nom: "Algarroba",
      preu: 999,
    }
  ];

  async retornaDades() {
    var resultat = await this.httpService.consultaDades();
    this.cotxes = resultat;
  }

  ngOnInit(): void {
   this.retornaDades();
  }

  constructor(public httpService: ServeiService) {}


}
