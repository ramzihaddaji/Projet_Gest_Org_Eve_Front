import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (!localStorage.getItem('userdata')) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
