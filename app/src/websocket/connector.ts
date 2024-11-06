import { onmessage } from './onmessage';

let instance: Connector | null;
let _nonce = crypto.randomUUID();

export class Connector {
	uri: string;
	static ws: WebSocket;
	static hooks = {
		open: new Set<Function>()
	};

	constructor(uri?: string) {
		this.uri = uri ?? import.meta.env.VITE_WS_SERVER_URL;

		if (instance instanceof Connector) {
			return instance;
		}

		Connector.ws = new WebSocket(this.uri);

		Connector.ws.addEventListener('open', (event) => {
			console.log('Open', event);

			//  Not Working (Keep it - good pattern)
			Connector.hooks.open.forEach((hook) => {
				try {
					hook(event);
				} catch (error) {
					console.error('Error executing open hook:', error);
				}
			});
		});

		Connector.ws.addEventListener('message', (event) => {
			// console.log('Message', event);
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

		// console.log('send');
		_nonce = crypto.randomUUID();
		data = {
			timestamp: Date.now(),
			nonce: _nonce,
			...data
		};

		Connector.ws.send(JSON.stringify(data));
	}

	// Not Working
	static onOpen(callback: Function) {
		Connector.hooks.open.add(callback);
		return () => Connector.hooks.open.delete(callback); // Returns cleanup function
	}
}
