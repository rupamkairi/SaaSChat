import { actions } from '$src/utils/actions';
import { Connector } from '$src/websocket';
import { guestStore } from '../store/user.svelte';
import { onConnectWithGuest } from './chainofcommands';

export function connectWithPing() {
	const ping = { action: `${actions.unknown}:${actions.ping}` };
	Connector.send(ping);
}

export function connectWithGuest() {
	console.log('connectWithGuest');
	const payload = {
		action: `${actions.connect}:${actions.widget_connect}`,
		data: {
			guest_id: guestStore.guest.id
		}
	};
	Connector.send(payload);
	onConnectWithGuest();
}
