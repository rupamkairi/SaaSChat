<script>
	import { apis } from '$src/constants/apis';
	import Chats from '$src/layouts/chats.layout.svelte';
	import Messages from '$src/layouts/messages.layout.svelte';
	import { authStore } from '$src/store/auth.svelte';
	import { chatStore } from '$src/store/chats.svelte';
	import { infos, sidebar } from '$src/store/layouts.svelte';
	import { userStore } from '$src/store/user.svelte';
	import { apiFetch } from '$src/utils/api-helpers/api-fetch';
	import { Connector } from '$src/websocket';
	import { createQuery } from '@tanstack/svelte-query';
	import { onMount } from 'svelte';

	const ping = { action: '0:1' };
	const heartbeat = { action: '0:2' };

	Connector?.ws.addEventListener('open', (event) => {
		Connector?.send(ping);
	});

	const _user = createQuery({
		queryKey: ['user'],
		queryFn: async () => {
			const data = await apiFetch({ api: apis.users.user(authStore.auth.user_id) });
			userStore.user = data.user;
			return data.user;
		}
	});

	$inspect(userStore);

	onMount(() => {
		$_user.refetch();
	});
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<main class="h-screen overflow-hidden">
	<div class="flex h-full">
		<div class="flex flex-col" class:w-16={!$sidebar} class:w-64={$sidebar}>
			<div class="bg-slate-50 flex-grow shadow-inner">
				{#if userStore.user.id}
					<div>
						<p>{userStore.user.name}</p>
					</div>
				{:else}
					<div />
				{/if}
				<div />
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
