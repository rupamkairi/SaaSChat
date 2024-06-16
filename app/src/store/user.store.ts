import { derived, writable } from 'svelte/store';

export const user = writable<any>(null);

export const user_TeamId = derived(user, ($user) => {
	if (!$user) return null;
	else return $user.team_id;
});
