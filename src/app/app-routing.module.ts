import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListBugsComponent } from './list-bugs/list-bugs/list-bugs.component';
import { ListMedecinComponent } from './medecin/list-medecin/list-medecin.component';

const routes: Routes = [
  {path: 'medecins', component: ListMedecinComponent},
  {path: 'bug', component: ListBugsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
