import { Connector } from '$src/websocket';
import { guestStore } from '../store/user.svelte';

export function connectWithPing() {
	const ping = { action: '0:1' };
	Connector.send(ping);
}

export function connectWithGuest() {
	console.log('connectWithGuest');
	const payload = {
		action: '101:1',
		data: {
			guest_id: guestStore.guest.id
		}
	};
	Connector.send(payload);
}
