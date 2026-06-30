import { User } from '../../auth/models/user.model';
import { AppNotification } from '../../../shared/models/notification.model';

export interface AppState {
    user: User | null;
    theme: 'light' | 'dark';
    loading: boolean;
    notificationCount: number;
    notifications: AppNotification[];
}