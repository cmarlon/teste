import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private alfa: AngularFireAuth) { }

  login(user: User) {
    return this.alfa.auth.signInWithEmailAndPassword(user.email, user.password);

  }

  register(user: User) {
    return this.alfa.auth.createUserWithEmailAndPassword(user.email, user.password);
  }
  logout() {

  }
  getAuth() {
    return this.alfa.auth;
  }
}
