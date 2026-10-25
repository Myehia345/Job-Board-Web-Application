import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Redirect unauthenticated users to the login page.
  return authService.isLoggedIn() ? true : router.createUrlTree(['/login']);
};
