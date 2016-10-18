import {Routes} from "@angular/router";
import {CardDemoComponent} from "./card-demo/card-demo.component";
import {LoginComponent} from "./login/login.component";
/**
 * Created by Andromeda on 18/10/2016.
 */


export const  routes:Routes = [
  {path:'Login', component: LoginComponent},
  { path: '**', component: CardDemoComponent }

];
