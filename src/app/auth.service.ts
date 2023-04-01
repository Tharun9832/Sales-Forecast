import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  login(uname: string, pwd: string): Observable<boolean> {
    this.isLoggedIn = uname == 'tharunk' && pwd == 'tharunk';
    sessionStorage.setItem("isLoggedIn", this.isLoggedIn ? 'true' : 'false');
    if (!this.isLoggedIn) {
      alert("Check you credentials!")
    }
    return of(this.isLoggedIn)
  }
}
