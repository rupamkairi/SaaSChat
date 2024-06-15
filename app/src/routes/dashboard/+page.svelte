<script>
	import Chats from '$src/layouts/chats.layout.svelte';
	import Messages from '$src/layouts/messages.layout.svelte';
	import { infos, sidebar } from '$src/store/layouts.store';
	import { Connector } from '$src/websocket';

	const ping = { action: '0:1' };
	const heartbeat = { action: '0:2' };

	Connector?.ws.addEventListener('open', (event) => {
		Connector?.send(ping);
	});
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<main class="h-screen overflow-hidden">
	<div class="flex h-full">
		<div class="flex flex-col" class:w-16={!$sidebar} class:w-64={$sidebar}>
			<div class="bg-slate-50 flex-grow shadow-inner">
				<!-- <div>S</div> -->
			</div>
		</div>
		<div class="w-80 flex flex-col">
			<Chats />
		</div>
		<div class="flex-grow flex flex-col">
			<Messages />
		</div>
		<div class="flex flex-col" class:w-0={!$infos} class:w-96={$infos}>
			<div class="bg-slate-100 border border-gray-200 flex-grow shadow-inner">
				<!-- <div>S</div> -->
			</div>
		</div>
	</div>
</main>
