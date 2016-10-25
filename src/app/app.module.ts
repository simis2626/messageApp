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


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardDemoComponent,
    LoginComponent,
    AuthBoxComponent
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
