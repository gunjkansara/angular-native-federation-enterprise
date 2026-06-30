import { User } from '../../auth/models/user.model';

export interface AppState {
    user: User | null;
    theme: 'light' | 'dark';
    loading: boolean;
    notificationCount: number;
}