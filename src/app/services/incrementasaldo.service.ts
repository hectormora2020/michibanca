import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IncrementasaldoService {

  constructor(private http: HttpClient) { 
  }

  aplica( cuenta : string | undefined ) {
    return this.http.get( "http://localhost:8080/api/v1/saldo?cuenta=" + cuenta  );
  } // ./valida()

}
