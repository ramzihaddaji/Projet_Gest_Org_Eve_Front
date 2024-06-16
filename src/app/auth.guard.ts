import { Injectable, inject } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (!localStorage.getItem('admindata')) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  
}
