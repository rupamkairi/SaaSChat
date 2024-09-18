<script>
	import Widget from '../packages/widget/widget.svelte';

	import { Connector } from '$src/websocket';

	const ping = { action: '0:1' };
	const heartbeat = { action: '0:2' };

	Connector?.ws.addEventListener('open', (event) => {
		Connector?.send(ping);
		// setInterval(() => {
		// 	Connector?.send(heartbeat);
		// }, 3000);
		Connector.ws.onmessage = (event) => {
			// console.log(JSON.parse(event.data));
		};
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<h1>Home</h1>
	<button
		on:click={() => {
			Connector?.send(ping);
		}}>Ping</button
	>
	<button
		on:click={() => {
			Connector?.send(heartbeat);
		}}>Heartbeat</button
	>
	<Widget />
</div>
