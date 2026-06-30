import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

export function roleGuard(...roles: string[]): CanActivateFn {

    return () => {
        const authService = inject(AuthService);

        const router = inject(Router);

        const userRole = authService.currentUser()?.role;

        if (userRole && roles.includes(userRole)) {
            return true;
        }

        return router.createUrlTree(['/access-denied']);
    };
}