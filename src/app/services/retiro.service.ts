import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetiroService {

  constructor(private http: HttpClient) { 
  }

  aplica( id : string | undefined , saldo : number | undefined) {
    return this.http.get( "http://localhost/timedServicios/angular/retiro/?id=" + id + "&saldo=" + saldo  );
  } // ./valida()

}
