import Connector from './connector';
export { default as connector } from './connector';

new Connector(import.meta.env.VITE_WS_URL);
