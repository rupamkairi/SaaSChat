import { Connector } from '$src/websocket/index';

export async function loadMessagesBetween({ receiver_id = '', sender_id = '' }, extras = {}) {
	try {
		const payload = {
			action: '12:1203',
			data: {
				receiver_id,
				sender_id
			},
			...extras
		};

		// console.log('loadMessagesBetween', payload);

		Connector.send(payload);
	} catch (error) {
		console.log(error);
	}
}
