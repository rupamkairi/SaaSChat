<script>
	import Widget from '../packages/widget/widget.svelte';

	import { connector } from '../websocket';

	const ping = { action: '0:1', from: 'widget' };
	const heartbeat = { action: '0:2' };

	connector?.ws.addEventListener('open', (event) => {
		connector?.send(ping);
		connector.ws.onmessage = (event) => {
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
			connector?.send(ping);
		}}>Ping</button
	>
	<button
		on:click={() => {
			connector?.send(heartbeat);
		}}>Heartbeat</button
	>
	<Widget />
</div>
