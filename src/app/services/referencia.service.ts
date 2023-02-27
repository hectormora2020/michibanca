import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReferenciaService {

  constructor(private http: HttpClient) { 
  }

  genera( cuenta : string | undefined ) {
    return this.http.get( "http://localhost:8080/api/v1/referencia?cuenta=" + cuenta );
  } // ./valida()
}
