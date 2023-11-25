// vigilante.guard.ts

import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VigilanteDocenteGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isAllowed = this.cookieService.check('token_access');
    const isAllowedUser = parseInt(this.cookieService.get("token_user"));


    if (!isAllowed) {
      // Redirige a otra ruta o muestra un mensaje de error.
      this.router.navigate(['/']);
    }

    if(isAllowedUser!==2){
    
      isAllowed === false;
    }

    console.log("entra weee "+isAllowedUser);

   

    return isAllowed;
  }

  constructor(private router: Router, private cookieService:CookieService) {}
}
