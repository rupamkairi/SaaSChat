<script>
	import Widget from '../packages/client/widget.svelte';

	import { connector } from '../websocket';

	const ping = { action: '0:1' };
	const heartbeat = { action: '0:2' };

	connector?.ws.addEventListener('open', (event) => {
		connector?.send(ping);
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
