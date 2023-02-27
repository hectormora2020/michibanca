import { NgModule         } from '@angular/core';
import { CommonModule     } from '@angular/common';
import { FormsModule      } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { InicioComponent   } from './components/inicio/inicio.component';
import { BancaComponent    } from './components/banca/banca.component';
import { AuthGuard         } from '../guards/auth.guard';

@NgModule({
  declarations: [
    InicioComponent,
    BancaComponent
  ],
  providers: [
    AuthGuard
  ] , 
  imports: [
    FormsModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
