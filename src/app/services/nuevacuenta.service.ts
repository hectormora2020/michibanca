import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NuevacuentaService {

  constructor(private http: HttpClient) { 
  }

  creaCuenta( clave : string, contrasenya : string, nombre : string ) {
    return this.http.get( "http://localhost:8080/api/v1/nueva?clave=" + clave + "&contrasenya=" + contrasenya+ "&nombre=" + nombre  );
  } // ./valida()
}
