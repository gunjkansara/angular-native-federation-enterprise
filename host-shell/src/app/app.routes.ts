import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Layout } from './shared/layout/layout';
import { authGuard } from './core/auth/guards/auth.guard';
import { roleGuard } from './core/auth/guards/role.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then(c => c.Login)
    },
    {
        path: 'access-denied',
        loadComponent: () => import('./pages/access-denied/access-denied').then(c => c.AccessDenied)
    },
    {
        path: '',
        component: Layout,
        canActivate: [authGuard],
        children: [
            {
                path: '',
                component: Home
            },
            {
                path: 'about',
                component: About
            },
            {
                path: 'products',
                loadChildren: () =>
                    loadRemoteModule('remote-products', './routes')
                        .then(m => m.routes)
            },
            {
                path: 'users',
                canActivate: [roleGuard('ADMIN', 'MANAGER')],
                loadChildren: () =>
                    loadRemoteModule('remote-users', './routes')
                        .then(m => m.routes)
            },
            {
                path: 'reports',
                loadChildren: () =>
                    loadRemoteModule('remote-reports', './routes')
                        .then(m => m.routes)
            }

        ]
    },
    { path: '**', redirectTo: '' }
];
