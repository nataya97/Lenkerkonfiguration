import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {UserComponent} from "./components/user/user.component";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {GriffComponent} from "./components/griff/griff.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'griffe', component: GriffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
