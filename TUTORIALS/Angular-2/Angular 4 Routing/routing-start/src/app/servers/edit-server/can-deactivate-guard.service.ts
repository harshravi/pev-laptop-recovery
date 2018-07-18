import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface CanCompoenentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanCompoenentDeactivate>{
    canDeactivate(component: CanCompoenentDeactivate,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot,
                  nextState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                          return component.canDeactivate();
    }
}
