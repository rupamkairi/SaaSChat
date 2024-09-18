import { onmessage } from './onmessage';

let instance: Connector | null;
let _nonce = crypto.randomUUID();

export class Connector {
	uri: string;
	static ws: WebSocket;

	constructor(uri?: string) {
		this.uri = uri ?? import.meta.env.VITE_SERVER_WS_URL;

		if (instance instanceof Connector) {
			return instance;
		}

		Connector.ws = new WebSocket(this.uri);

		Connector.ws.addEventListener('open', (event) => {
			console.log('Open', event);
		});

		Connector.ws.addEventListener('message', (event) => {
			console.log('Message', event);
			onmessage(event);
		});

		Connector.ws.addEventListener('error', (event) => {
			console.log('Error', event);
		});

		Connector.ws.addEventListener('close', (event) => {
			console.log('Close', event);
		});

		instance = this;
		return instance;
	}

	static send(data: any) {
		if (!Connector.ws.readyState) return;

		_nonce = crypto.randomUUID();
		data = {
			timestamp: Date.now(),
			nonce: _nonce,
			...data
		};

		Connector.ws.send(JSON.stringify(data));
	}
}
