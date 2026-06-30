import { Injectable, signal, computed } from '@angular/core';
import { AppState } from './models/app-state.model';
import { User } from '../auth/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AppStateService {

    private state = signal<AppState>({
        user: null,
        theme: 'light',
        loading: false,
        notificationCount: 0
    });

    readonly user = computed(() => this.state().user);

    readonly theme = computed(() => this.state().theme);

    readonly loading = computed(() => this.state().loading);

    readonly notificationCount = computed(() => this.state().notificationCount);

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
}