import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {MenuComponent} from "./menu/menu.component";
import {CardDemoComponent} from "./card-demo/card-demo.component";
import {routes} from "./app.router";
import {LoginComponent} from "./login/login.component";
import {UserService} from "./user.service";
import {AuthBoxComponent} from "./smallComponents/auth-box/auth-box.component";
import { LoginCardComponent } from './smallComponents/login-card/login-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardDemoComponent,
    LoginComponent,
    AuthBoxComponent,
    LoginCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
