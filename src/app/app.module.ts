import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardDemoComponent } from './card-demo/card-demo.component';
import {routes} from './app.router';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardDemoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
