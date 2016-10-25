import {Component, OnInit, Input} from '@angular/core';
import {User} from "../../objectclasses/User";

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css',
    '../../shared/shared-animators.css']
})
export class LoginCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(()=>this.visibleSubtitle=true,130);
  }
  public visibleSubtitle:boolean;

    @Input()user:User;


}
