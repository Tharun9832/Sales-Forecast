import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  login(uname: string, pwd: string): Observable<boolean> {
    this.isLoggedIn = uname == 'tharunk' && pwd == 'tharunk';
    localStorage.setItem("isLoggedIn", this.isLoggedIn ? 'true' : 'false');
    return of(this.isLoggedIn);
  }
}
