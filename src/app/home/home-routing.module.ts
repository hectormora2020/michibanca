import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent      } from './components/inicio/inicio.component';
import { BancaComponent       } from './components/banca/banca.component';
import { AuthGuard            } from '../guards/auth.guard';

const routes: Routes = [
  {path: "",          component: InicioComponent },
  {path: "banca",     component: BancaComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
