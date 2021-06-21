import { Medicos } from './../models/Medicos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })

  
export class MedicosService {

    private baseURL = "http://localhost:3000/";
  
    constructor(private http: HttpClient) { }
  
    listar() : Observable<Medicos[]>{
      return this.http.get<Medicos[]>(`${this.baseURL}medico/listar`);
    }
  
    cadastrar(medico : Medicos) : Observable<Medicos>{
      return this.http.post<Medicos>(`${this.baseURL}medico/cadastrar`, medico);
    }
  }
  