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
import {LoginCardComponent} from "./smallComponents/login-card/login-card.component";
import {AuthService} from "./auth.service";
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatListCardComponent } from './chat-list-card/chat-list-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardDemoComponent,
    LoginComponent,
    AuthBoxComponent,
    LoginCardComponent,
    ChatListComponent,
    ChatListCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
