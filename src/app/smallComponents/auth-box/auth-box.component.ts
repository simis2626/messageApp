import {Component, OnInit, Input, HostListener} from "@angular/core";
import {User} from "../../objectclasses/User";

@Component({
  selector: 'app-auth-box',
  templateUrl: './auth-box.component.html',
  styleUrls: ['./auth-box.component.css',
              '../../shared/shared-animators.css']
})
export class AuthBoxComponent implements OnInit {
  public shown:boolean;
  public shown2:boolean;
  constructor() {
    this.shown = false;
    this.shown2=false;
  }

  ngOnInit() {
    setTimeout(()=>this.shown2=true,4000);
  }

  @Input() user: User;




}
