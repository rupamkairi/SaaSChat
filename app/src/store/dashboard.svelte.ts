import { dashboardStatusStates } from '$src/constants/statuses';
import { writable } from 'svelte/store';

export const dashboardState = writable<string>(dashboardStatusStates.INITIAL);
