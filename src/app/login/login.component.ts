import { Component, OnInit } from '@angular/core';
import {User} from "../objectclasses/User";
import {UserService} from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userService:UserService;
  users:User[];



  constructor(userService:UserService) {
    this.userService = userService;

  }

  ngOnInit() {
    this.userService.getUsers().subscribe((data)=> this.users = data);

  }










}
