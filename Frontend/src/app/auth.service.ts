import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface user {
  username: string,
  password: string
}

const users: user[] = [
  { username: 'tharunk', password: 'tharunk' },
  { username: 'testuser', password: 'testuser' },
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  login(uname: string, pwd: string): Observable<boolean> {
    if (this.isLoggedIn) {
      return of(this.isLoggedIn)
    }

    for (let user of users) {
      console.log(user);
      if (user.username === uname && user.password === pwd) {
        this.isLoggedIn = true;
        break;
      }
    }

    sessionStorage.setItem("isLoggedIn", this.isLoggedIn ? 'true' : 'false');
    if (!this.isLoggedIn) {
      alert("Check you credentials!")
    }
    return of(this.isLoggedIn)
  }

  logout() {
    this.isLoggedIn = false;
    sessionStorage.setItem("isLoggedIn", 'false');
  }
}
