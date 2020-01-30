import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {TableComponent} from './table/table.component';


const routes: Routes = [
  {path: '',  redirectTo: '/sign-in', pathMatch: 'full'},
  {path: 'sign-in',  component: SignInComponent},
  {path: 'table',  component: TableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [SignInComponent, TableComponent];
