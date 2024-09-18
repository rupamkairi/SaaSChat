import { format } from 'date-fns';

export function formatTime(time: string) {
	return format(new Date(time), 'HH:mm');
}
