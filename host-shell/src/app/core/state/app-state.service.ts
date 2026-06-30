import { Injectable, signal, computed } from '@angular/core';
import { AppState } from './models/app-state.model';
import { User } from '../auth/models/user.model';

import { AppNotification } from '../../shared/models/notification.model';

@Injectable({
    providedIn: 'root'
})
export class AppStateService {

    private state = signal<AppState>({
        user: null,
        theme: 'light',
        loading: false,
        notificationCount: 0,
        notifications: []
    });

    readonly user = computed(() => this.state().user);

    readonly theme = computed(() => this.state().theme);

    readonly loading = computed(() => this.state().loading);

    readonly notificationCount = computed(() => this.state()
        .notifications
        .filter(notification => !notification.read)
        .length
    );

    readonly notifications = computed(() => this.state().notifications);

    setUser(user: User | null): void {
        this.state.update(state => ({ ...state, user }));
    }

    setTheme(theme: 'light' | 'dark'): void {
        this.state.update(state => ({ ...state, theme }));
    }

    setLoading(loading: boolean): void {
        this.state.update(state => ({ ...state, loading }));
    }

    setNotificationCount(count: number): void {
        this.state.update(state => ({ ...state, notificationCount: count }));
    }

    addNotification(notification: AppNotification): void {
        this.state.update(state => ({
            ...state,
            notifications: [notification, ...state.notifications],
            notificationCount: state.notificationCount + 1
        }));
    }

    clearNotifications(): void {
        this.state.update(state => ({
            ...state, notifications: [], notificationCount: 0
        }));
    }

    markAllAsRead(): void {
        this.state.update(state => ({
            ...state,
            notifications: state.notifications.map(notification => ({ ...notification, read: true })),
            notificationCount: 0
        }));
    }
}