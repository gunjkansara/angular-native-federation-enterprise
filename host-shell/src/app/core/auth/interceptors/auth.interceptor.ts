import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
        const user = JSON.parse(currentUser);

        const clonedRequest =
            req.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }
            });

        return next(clonedRequest).pipe(
            catchError(error => {
                if (error.status === 401) {
                    localStorage.clear();
                    window.location.href = '/login';
                }

                return throwError(() => error);
            })
        );
    }

    return next(req);
};