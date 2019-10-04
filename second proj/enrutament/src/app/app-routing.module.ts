import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { NotaComponent } from './nota/nota.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
 // { path: 'notes', component: NotesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nota/:id', component: NotaComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'notes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
