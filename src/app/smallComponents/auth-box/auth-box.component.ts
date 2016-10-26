import {Component, OnInit, Input, HostListener} from "@angular/core";
import {User} from "../../objectclasses/User";

@Component({
  selector: 'app-auth-box',
  templateUrl: './auth-box.component.html',
  styleUrls: ['./auth-box.component.css',
              '../../shared/shared-animators.css']
})
export class AuthBoxComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  @Input() user: User;
  @Input() show:boolean;





}
