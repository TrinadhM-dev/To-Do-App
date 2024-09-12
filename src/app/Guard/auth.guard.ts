import { CanActivateFn, Router } from "@angular/router";
import { AngularService } from "../service/angular.service";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let service = inject(AngularService);

  if (service.isLoggedIn()) {
    return true;
  } else {
    alert(`Unauthorized Access`);
    router.navigateByUrl('/login');
    return false;
  }
}
