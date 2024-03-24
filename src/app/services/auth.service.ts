import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  last,
  lastValueFrom,
  map,
  take,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: any;
  private subject = new BehaviorSubject<any>(undefined);

  async login(email: string, password: string): Promise<any> {
    const result = await new Promise<any>((resolve, reject) => {
      // emulate a short delay (200ms)
      setTimeout(() => {
        if (email === 'user@gmail.com' && password === '123456') {
          resolve({
            email,
            password,
            name: 'User',
            active: true,
          });
        } else {
          reject(null);
        }
      }, 200);
    });
    if (result) {
      this.user = { ...result };
      this.subject.next(this.user);
      return this.user;
    }
    console.log('rejected');
    return null;
  }

  logout() {
    this.user = null;
    this.subject.next(null);
    return null;
  }

  async getUser() {
    console.log('getUser:', this.user);
    return this.user;
  }

  async isLoggedIn() {
    const user = await this.getUser();
    return user?.active === true;
  }

  getObservable() {
    return this.subject.asObservable();
  }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return await this.isLoggedIn();
  }

  async canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.canActivate(route, state);
  }
}
