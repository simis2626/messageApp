import {Component, OnInit, Input, HostListener} from "@angular/core";
import {User} from "../../objectclasses/User";

@Component({
  selector: 'app-auth-box',
  templateUrl: './auth-box.component.html',
  styleUrls: ['./auth-box.component.css']
})
export class AuthBoxComponent implements OnInit {

  public user: User;

  constructor() {
    this.shown = false;
  }

  ngOnInit() {
  }

  @Input() user: User;

  @HostListener('click')
  ClickResponse() {
    this.shown = true;
  }
}
