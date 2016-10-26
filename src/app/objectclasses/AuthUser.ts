import {User} from "./User";
/**
 * Created by Andromeda on 26/10/2016.
 */


export class AuthUser {
  constructor(public user: User,
              public password?: string,
              public authToken?: string) {
  }


}
