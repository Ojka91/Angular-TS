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
  mostraCotxes = 5;
  numPagines = 6;
  arrayNumPagines: number[] = [];
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
    this.calcularPaginacio();
  }

  ngOnInit(): void {
   this.retornaDades();

  }

  /**
   * calcularPaginacio
   */
  public calcularPaginacio() {
    this.numPagines = Math.ceil(this.cotxes.length/this.mostraCotxes);
    this.arrayNumPagines = []
    for (var x = 1; x < this.numPagines+1; x++){
      this.arrayNumPagines.push(x);
    }
  }

  constructor(public httpService: ServeiService) {}


}
