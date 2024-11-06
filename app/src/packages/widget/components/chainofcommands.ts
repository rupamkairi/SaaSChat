import { actions } from '$src/utils/actions';
import { Connector } from '$src/websocket';

export function getMessage(event: MessageEvent): { actions: string[]; result: any } {
	try {
		const { error, result } = JSON.parse(event.data);
		if (error) throw error;
		const { nonce, action } = result;
		const actions = action.split(':');
		return { actions, result };
	} catch (error) {
		return { actions: [], result: {} };
	}
}

export function onConnectWithGuest() {
	Connector.ws.addEventListener('message', (event) => {
		const { actions: acts, result } = getMessage(event);
		if (acts.includes(actions.widget_connect.toString())) {
			console.log('widget connect successful', result);
		}
	});
	console.log('onConnect');
}
