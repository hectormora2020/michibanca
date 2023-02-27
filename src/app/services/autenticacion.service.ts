import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http: HttpClient) { 
  }

  valida( clave : string, contrasenya: string ) {    
    return this.http.get("http://localhost:8080/api/v1/autentica?clave=" + clave + "&contrasenya=" + contrasenya);
  } // ./valida()

}
