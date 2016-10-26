import {Injectable} from "@angular/core";
import {AuthUser} from "./objectclasses/AuthUser";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  constructor() {
  }

  //the presence of a non-null authtoken means the user is logged in.

  authenticateUser(attempt: AuthUser): Observable<AuthUser> {
    attempt.authToken = "authed";
    console.log("in the Service");
    return Observable.of(attempt)
  }


}
