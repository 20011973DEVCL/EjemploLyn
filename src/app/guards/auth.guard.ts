import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { constants } from '../constants/constants';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const response = await authService.canActivate(route, state);
  if (!response) {
    router.navigate([constants.routes.login]); // Not authorized -> redirected to login
  }
  return response;
};
