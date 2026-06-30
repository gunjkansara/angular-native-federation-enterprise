import { Injectable, signal, computed } from '@angular/core';

import { User } from '../models/user.model';

import { AppStateService } from '../../state/app-state.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    currentUser = signal<User | null>(null);

    isAuthenticated = computed(() => this.currentUser() !== null);

    constructor(private appState: AppStateService) {
        this.restoreSession();
    }

    login(username: string, password: string): boolean {

        const users: User[] = [
            {
                id: 1,
                username: 'Gunjan Kansara',
                role: 'ADMIN',
                token: 'admin-token'
            },
            {
                id: 2,
                username: 'Project Manager',
                role: 'MANAGER',
                token: 'manager-token'
            },
            {
                id: 3,
                username: 'Business User',
                role: 'USER',
                token: 'user-token'
            }
        ];

        const credentials = [
            {
                username: 'admin',
                password: 'admin123',
                user: users[0]
            },
            {
                username: 'manager',
                password: 'manager123',
                user: users[1]
            },
            {
                username: 'user',
                password: 'user123',
                user: users[2]
            }
        ];

        const match = credentials.find(c => c.username === username && c.password === password);

        if (match) {
            this.currentUser.set(match.user);
            this.appState.setUser(match.user);

            // For Testing Notification Badge added below code
            this.appState.addNotification({
                id: 1,
                title: 'Login Successful',
                message: 'Welcome Admin',
                read: false,
                createdAt: new Date()
            });

            localStorage.setItem('currentUser', JSON.stringify(match.user));
            return true;
        }

        return false;
    }

    hasRole(...roles: string[]): boolean {
        const role = this.currentUser()?.role;
        return !!role && roles.includes(role);
    }

    logout(): void {
        localStorage.removeItem('currentUser');
        this.currentUser.set(null);
        this.appState.setUser(null);
    }

    restoreSession(): void {
        const user =
            localStorage.getItem('currentUser');

        if (user) {
            // this.currentUser.set(JSON.parse(user));
            const parsedUser = JSON.parse(user);
            this.currentUser.set(parsedUser);
            this.appState.setUser(parsedUser);
        }
    }
}