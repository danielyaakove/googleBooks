import { Injectable } from "@angular/core";
import { User } from "./Models/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  password = "1234";
  userName = "maor";
  currentUser: User;
  isLoggedIn = false;

  constructor() {}

  login(model: any): boolean {
    if (model.password === this.password && model.userName === this.userName) {
      localStorage.setItem("user", JSON.stringify(model));
      this.currentUser = new User(model.userName);
      this.isLoggedIn = true;
      return true;
    } else {
      return false;
    }
  }

  loggedIn() {
    if (!this.isLoggedIn && localStorage.getItem('user') != null){
      //handle refresh;
      const user = localStorage.getItem('user');
      var parseUser = JSON.parse(user);
      this.currentUser = new User(parseUser.userName);
      this.isLoggedIn = true;

    }
    return this.isLoggedIn;
  }
  logout(){
    localStorage.removeItem('user');
      
  }
}
