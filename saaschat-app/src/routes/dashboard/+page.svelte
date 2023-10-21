<script>
	import Clients from '../../layouts/clients.layout.svelte';
	import Chats from '../../layouts/chats.layout.svelte';
	import { getContext } from 'svelte';
	import { LayoutStateKeys } from '../../store/states';
	import { sidebar, infos } from '../../store/layouts.state';

	// const sidebar = getContext(LayoutStateKeys.sidebar);

	console.log({ sidebar, infos });
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
		<div class="w-96 flex flex-col" class:w-0={!$infos} class:w-16={$infos}>
			<div class="bg-slate-100 border border-gray-200 flex-grow shadow-inner">
				<!-- <div>S</div> -->
			</div>
		</div>
	</div>
</main>
