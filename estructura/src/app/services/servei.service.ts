import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coche } from '../entities/coche';

@Injectable({
  providedIn: 'root'
})
export class ServeiService {

  constructor(private httpClient: HttpClient) { }
    public consultaDades(){
      return this.httpClient.get<Coche[]>('assets/coches.json').toPromise();
  }
}
