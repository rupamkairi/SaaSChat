import { connector } from '../../websocket';

export async function listMessagesBetween({ receiver_id = '', sender_id = '' }) {
	const payload = {
		action: '12:1203',
		data: {
			receiver_id,
			sender_id
		}
	};

	console.log(payload);

	connector.send(payload);
}
