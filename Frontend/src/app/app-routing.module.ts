import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./components/user/user.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {GriffComponent} from "./components/griff/griff.component";
import {BestellungComponent} from "./components/bestellung/bestellung.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'lenkerkonfiguration', component: GriffComponent},
  {path: 'newUser', component: UserComponent},
  {path: 'bestellung', component: BestellungComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
