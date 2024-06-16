import { derived, writable } from 'svelte/store';

export const isAuthenticated = writable(false);
export const authUser = writable<any>(null);

export const authUser_UserId = derived(authUser, ($authUser) => {
	if (!$authUser) return null;
	else return $authUser.user_id;
});
