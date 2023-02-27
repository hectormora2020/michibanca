import { Component, OnInit } from '@angular/core';
import { CuentasService } from '../../../services/cuentas.service';
import { NuevacuentaService } from '../../../services/nuevacuenta.service';
import { IncrementasaldoService } from '../../../services/incrementasaldo.service';
import { ReferenciaService } from '../../../services/referencia.service';

@Component({
  selector: 'app-banca',
  templateUrl: './banca.component.html',
  styleUrls: ['./banca.component.css']
})
export class BancaComponent implements OnInit {

  private perfil       : string  | undefined; 
  public administrador : boolean | undefined;
  public numeroCuenta  : string  | undefined;
  public saldo         : number  | undefined;
  public nombre        : string  | undefined;
  public cuentas : any;  
  public genReferencia : boolean;
  public referencia : string

  public nuevacuenta_username : string;
  public nuevacuenta_nombre   : string;
  public nuevacuenta_password : string;

  constructor( 
    private cuentasServicio : CuentasService, 
    private nuevaCuentaService : NuevacuentaService, 
    private incrementaSaldoService : IncrementasaldoService ,
    private referenciaService : ReferenciaService
    ) {    

    this.genReferencia = false;
    this.referencia = "";
    this.nuevacuenta_username = "";
    this.nuevacuenta_nombre   = "";
    this.nuevacuenta_password = "";    
  }

  ngOnInit() : void {
    this.administrador = false;
    if( localStorage.getItem("perfil") != null ) {
      this.perfil = localStorage.getItem("perfil")?.toString();

      if( this.perfil == 'A' ) {
        this.administrador = true;

        this.cuentasServicio.getData().subscribe(
          res => {

            this.cuentas = res;
          }, (error: any) => {
            console.log(error);
          });

      }
    }

    this.numeroCuenta = "";
    if( localStorage.getItem("numeroCuenta") != null ) {
      this.numeroCuenta = localStorage.getItem("numeroCuenta")?.toString();
    }

    this.saldo = 0;
    if( localStorage.getItem("saldo") != null ) {
      this.saldo = Number( localStorage.getItem("saldo")?.toString() );
    }

    this.nombre = "";
    if( localStorage.getItem("nombre") != null ) {
      this.nombre = localStorage.getItem("nombre")?.toString();
    }    
  }

  incrementaSaldo()  {
    this.incrementaSaldoService.aplica( this.numeroCuenta  ).subscribe(
      res => {

        let objAuth = <Auth> res;
        
        if( !objAuth.error ) {
          this.saldo =  Number( objAuth.saldo ); // Saldo
       }           
        
    }, (error: any) => {
      console.log(error);
    });
  }

  generarReferencia() {
    this.genReferencia = true;
    this.referenciaService.genera( this.numeroCuenta ).subscribe(
      res => {
        let r = <Ref> res;
        this.referencia = r.clave;
       
        
    }, (error: any) => {
      console.log(error);
    }
    );
  }

  crearCuenta() {
    this.nuevaCuentaService.creaCuenta( 
      this.nuevacuenta_username, 
      this.nuevacuenta_password, 
      this.nuevacuenta_nombre ).subscribe(
      res => {
        this.cuentas = res;
    }, (error: any) => {
      console.log(error);
    });
  }

}

class Ref {
   public clave;

   constructor() {
    this.clave = "";
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