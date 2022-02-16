import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medecin } from '../models/medecin';
import { medecins } from '../models/medecin.mockup';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  baseUrl = 'http://localhost:3000';
  
  constructor(private httpclient: HttpClient) {

   }
  getAllMedecins(): Observable <any>{
       return this.httpclient.get(`${this.baseUrl}`); //api node
  }
  getAllError() : Observable <any>{
    return this.httpclient.get(`${this.baseUrl}/bugs`);
  }
}
