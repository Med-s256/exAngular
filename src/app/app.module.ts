import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListMedecinComponent } from './medecin/list-medecin/list-medecin.component';
import { AjoutMedecinComponent } from './medecin/ajout-medecin/ajout-medecin.component';
import { MedecinComponent } from './medecin/medecin/medecin.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListBugsComponent } from './list-bugs/list-bugs/list-bugs.component';
import { BugComponent } from './bug/bug/bug.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ListMedecinComponent,
    AjoutMedecinComponent,
    MedecinComponent,
    ListBugsComponent,
    BugComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
