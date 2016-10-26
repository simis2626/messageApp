import {Component, OnInit, Input} from "@angular/core";
import {User} from "../../objectclasses/User";
import {AuthUser} from "../../objectclasses/AuthUser";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-box',
  templateUrl: './auth-box.component.html',
  styleUrls: ['./auth-box.component.css',
              '../../shared/shared-animators.css']
})
export class AuthBoxComponent implements OnInit {
  authService: AuthService;
  public userIsAuthed: boolean;
  public password: string;

  constructor(authService: AuthService, private router: Router) {
    this.authService = authService;
  }

  ngOnInit() {
  }

  @Input() user: User;
  @Input() show:boolean;

  checkPassword() {
    var authAttempt = new AuthUser(this.user, this.password);
    authAttempt.user = this.user;
    authAttempt.password = this.password;

    this.authService.authenticateUser(authAttempt).subscribe((data)=> {
      if (data.authToken) {
        this.userIsAuthed = true;
        console.log(this.userIsAuthed);
        this.router.navigate(['/']);
      }
    });
  }


  store(event) {
    this.password = event.target.value;

  }

  preventD(event) {
    event.stopPropagation();
  }


}
