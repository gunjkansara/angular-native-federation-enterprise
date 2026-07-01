import { User } from '../../auth/models/user.model';
import { AppNotification } from '../../../shared/models/notification.model';
import { ThemeMode } from './theme.model';

export interface AppState {
    user: User | null;
    theme: ThemeMode;
    loading: boolean;
    notificationCount: number;
    notifications: AppNotification[];
}