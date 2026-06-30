import { Routes } from '@angular/router';

import { Dashboard } from './pages/dashboard/dashboard';
import { SalesReport } from './pages/sales-report/sales-report';
import { Analytics } from './pages/analytics/analytics';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard
    },

    {
        path: 'sales',
        component: SalesReport
    },

    {
        path: 'analytics',
        component: Analytics
    }

];