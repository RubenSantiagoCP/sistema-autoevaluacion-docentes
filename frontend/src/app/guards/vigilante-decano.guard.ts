// vigilante.guard.ts

import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VigilanteDecanoGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let isAllowed = this.cookieService.check('token_access');
    const isAllowedUser = parseInt(this.cookieService.get("token_user"));
    console.log("Hola mundo");

    if (!isAllowed && isAllowedUser!==3) {
      // Redirige a otra ruta o muestra un mensaje de error.
      this.router.navigate(['**']);
    }

    
    if(isAllowedUser!==3){
      isAllowed = false;
    }

    return isAllowed;
  }

  constructor(private router: Router, private cookieService:CookieService) {}
}
