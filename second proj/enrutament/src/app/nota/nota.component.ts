import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  id:string;

  ngOnInit() {
   this.activatedRoute.params.subscribe(params=>{
      this.id = params['id']
   });
   if(Number(this.id) > 34){
     this.router.navigate(['/notes']);
   }
  }

}
