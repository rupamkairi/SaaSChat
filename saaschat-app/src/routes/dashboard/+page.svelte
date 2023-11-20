<script>
	import Clients from '../../layouts/clients.layout.svelte';
	import Chats from '../../layouts/chats.layout.svelte';
	import { getContext } from 'svelte';
	import { LayoutStateKeys } from '../../store/states';
	import { sidebar, infos } from '../../store/layouts.store';

	// const sidebar = getContext(LayoutStateKeys.sidebar);
	import { connector } from '../../websocket';

	const ping = { action: '0:1' };
	const heartbeat = { action: '0:2' };

	connector?.ws.addEventListener('open', (event) => {
		connector?.send(ping);
	});
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<main class="h-screen overflow-hidden">
	<div class="flex h-full">
		<div class="flex flex-col" class:w-0={!$sidebar} class:w-16={$sidebar}>
			<div class="bg-slate-50 flex-grow shadow-inner">
				<!-- <div>S</div> -->
			</div>
		</div>
		<div class="w-80 flex flex-col">
			<Clients />
		</div>
		<div class="flex-grow flex flex-col">
			<Chats />
		</div>
		<div class="flex flex-col" class:w-0={!$infos} class:w-96={$infos}>
			<div class="bg-slate-100 border border-gray-200 flex-grow shadow-inner">
				<!-- <div>S</div> -->
			</div>
		</div>
	</div>
</main>
