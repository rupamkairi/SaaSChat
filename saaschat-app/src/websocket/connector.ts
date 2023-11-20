import { onmessage } from './onmessage';

let instance: Connector | null;
let _nonce = crypto.randomUUID();
export default class Connector {
	uri: string;
	static ws: WebSocket;

	constructor(uri?: string) {
		this.uri = uri ?? import.meta.env.VITE_WS_URL;

		if (instance instanceof Connector) {
			return instance;
		}

		Connector.ws = new WebSocket(this.uri);

		Connector.ws.addEventListener('open', (event) => {
			// console.log('Open', event);
		});

		Connector.ws.addEventListener('message', (event) => {
			onmessage(event);
		});

		Connector.ws.addEventListener('error', (event) => {
			console.log('Error', event);
		});

		Connector.ws.addEventListener('close', (event) => {
			// console.log('Close', event);
		});

		instance = this;
		return instance;
	}

	static send(data: any) {
		if (!Connector.ws.readyState) return;

		data = {
			nonce: _nonce,
			timestamp: new Date().getTime(),
			...data
		};

		Connector.ws.send(JSON.stringify(data));
	}
}
