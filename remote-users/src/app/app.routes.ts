import { Routes } from '@angular/router';

import { UserList } from './pages/user-list/user-list';
import { UserProfile } from './pages/user-profile/user-profile';
import { AddUser } from './pages/add-user/add-user';

export const routes: Routes = [

    {
        path: '',
        component: UserList
    },

    {
        path: 'profile',
        component: UserProfile
    },

    {
        path: 'add',
        component: AddUser
    }

];