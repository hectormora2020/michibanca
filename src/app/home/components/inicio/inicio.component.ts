import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../../services/autenticacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  public error : boolean;
  public mensajeError : string;
  public username : string;
  public contrasenya : string;
  
  ngOnInit() : void {

    if( localStorage.getItem("token") !== null ) localStorage.removeItem("token");
    if( localStorage.getItem("perfil") !== null ) localStorage.removeItem("perfil");
    if( localStorage.getItem("nombre") !== null ) localStorage.removeItem("nombre");
    if( localStorage.getItem("numeroCuenta") !== null ) localStorage.removeItem("numeroCuenta");
    if( localStorage.getItem("token") !== null ) localStorage.removeItem("saldo");
    if( localStorage.getItem("nombre") !== null ) localStorage.removeItem("nombre");
  }

  constructor( private servicioAutenticacion: AutenticacionService ) {
    this.username     = "";
    this.contrasenya  = "";
    this.error        = false;
    this.mensajeError = "";
  }  

  validaUsuario() : void {    
    this.servicioAutenticacion.
    valida( this.username, this.contrasenya ).subscribe(
      res => {

            let objAuth = <Auth> res;
        
            if( objAuth.error ) {
              this.mensajeError = "MEOOOOWWW!.. Usuario/Contraseña incorrecta";
              this.error = true;    
            } else {
              localStorage.setItem("token",  objAuth.token );    
              this.error = false;    
              localStorage.setItem("perfil", objAuth.perfil ); // Usuario
              localStorage.setItem("numeroCuenta", objAuth.cuenta ); // Número de cuenta
              localStorage.setItem("saldo", objAuth.saldo ); // Saldo
              localStorage.setItem("nombre", objAuth.nombre );          
           }           

      }, (error: any) => {
        console.log(error);
      });

  }  

}


class Auth {
   
  public error  : boolean;
  public perfil : string;
  public cuenta : string;
  public saldo  : string;
  public nombre : string;
  public token  : string;

  constructor() {
    this.error  = true;
    this.perfil = "";
    this.cuenta = "";
    this.saldo  = "";
    this.nombre = "";
    this.token  = "";
  }

}