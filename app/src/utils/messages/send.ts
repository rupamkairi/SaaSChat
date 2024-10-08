import { Connector } from '$src/websocket/index';

export async function sendMessage({ content = '', receiver_id = '', sender_id = '' }) {
	const payload = {
		action: '12:1201',
		data: {
			content,
			receiver_id,
			sender_id
		}
	};

	console.log(payload);

	Connector.send(payload);
}
