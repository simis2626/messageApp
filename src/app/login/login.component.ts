import {Component, OnInit} from '@angular/core';
import {User} from "../objectclasses/User";
import {UserService} from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
    '../shared/shared-animators.css']
})
export class LoginComponent implements OnInit {
  userService:UserService;
  users:User[];
  public visibleSubtitle:boolean;


  constructor(userService:UserService) {
    this.userService = userService;
    this.visibleSubtitle = false;
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((data)=> this.users = data);
    setTimeout(()=> this.visibleSubtitle = true, 400);
  }









}
