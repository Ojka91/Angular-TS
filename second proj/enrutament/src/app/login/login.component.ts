import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string;
  pass:string;

  constructor(private router:Router,
    private autGuard: AuthGuard) {  }

  ngOnInit() {
  }

  ferLogin(){
    if(this.user == 'admin' && this.pass == 'admin'){
      this.autGuard.login= true;
      this.router.navigate(['/nota', 1]);
    }else{
      alert("no se cuele")
    }
  }

}
