import { loadInitialMessages } from '../packages/widget/store/messages.store';
import { actions } from '../utils/actions';

export function onmessage(event: MessageEvent) {
	try {
		const { error, result, from } = JSON.parse(event.data);
		const { action, data } = result;
		const segments = action.split(':');

		if (error) throw error;

		if (+segments[0] === actions.unknown) {
			switch (+segments[1]) {
				case actions.ping:
					// result = await pingPong();
					break;

				case actions.heartbeat:
					// result = await heartbeat();
					break;

				default:
			}
		}

		if (+segments[0] === actions.connect) {
			switch (+segments[1]) {
				case actions.widget_connect:
					// result = await widgetConnect();
					break;

				case actions.dashboard_connect:
					// result = await dashboardConnect();
					break;

				default:
			}
		}

		if (+segments[0] === actions.users) {
			// console.log("users switch");
			switch (+segments[1]) {
				case actions.users_create:
					// console.log("create switch");
					// result = await usersCreate();
					break;

				case actions.users_get_all:
					// result = await usersGetAll();
					break;

				case actions.users_update_by_id:
					// result = await usersUpdateById(data);
					break;

				default:
					break;
			}
		}

		if (+segments[0] === actions.messages) {
			// console.log('messages switch');
			switch (+segments[1]) {
				case actions.messages_send:
					// console.log("send switch");
					// result = await messagesSend(data);
					break;

				case actions.messages_get_all:
					// result = await messagesGetAll();
					break;

				case actions.messages_get_between:
					// console.log('get between switch', data);
					if (from === 'widget') loadInitialMessages(data);
					// result = await messagesGetBetween(data);
					break;

				default:
					break;
			}
		}

		// console.log('onmessage', result);
	} catch (error) {
		console.log('onmessage error', error);
	}
}
