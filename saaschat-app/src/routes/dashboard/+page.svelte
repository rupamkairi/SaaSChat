<script>
	import Clients from '../../layouts/clients.layout.svelte';
	import Chats from '../../layouts/chats.layout.svelte';
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<main class="h-screen overflow-hidden">
	<div class="flex h-full">
		<div class="w-16 flex flex-col">
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
		<div class="w-96 flex flex-col">
			<div class="bg-slate-100 border border-gray-200 flex-grow shadow-inner">
				<!-- <div>S</div> -->
			</div>
		</div>
	</div>
</main>
