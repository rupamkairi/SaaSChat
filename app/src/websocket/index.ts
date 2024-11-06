import { Connector } from './connector';
new Connector(import.meta.env.VITE_WS_SERVER_URL);

export * from './connector';
