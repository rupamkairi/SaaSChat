<script lang="ts">
	import { apis } from '$src/constants/apis';
	import { chatStore } from '$src/store/chats.svelte';
	import { userStore } from '$src/store/user.svelte';
	import { apiFetch } from '$src/utils/api-helpers/api-fetch';
	import { createQuery } from '@tanstack/svelte-query';
	import ChatListItem from './chats/chat-list-item.svelte';
	import ChatList from './chats/chat-list.svelte';
	import Header from './chats/header.svelte';

	$inspect(userStore);

	const _chatList = createQuery({
		queryKey: ['chatList', userStore.user.team_id],
		queryFn: async () => {
			const data = await apiFetch({ api: apis.teams.chats(userStore.user.team_id).index });
			chatStore.chats = data.chats;
			return data.chats;
		}
	});

	$effect(() => {
		$_chatList.refetch();
	});
</script>

<div class="bg-white border-x h-screen flex-grow shadow-md flex flex-col overflow-scroll">
	<Header />
	<div class="my-4 mx-3">
		<button class="px-4 py-1 bg-white rounded shadow text-sm">Active</button>
	</div>

	{#if $_chatList.status === 'pending'}
		<span>Loading...</span>
	{:else if $_chatList.status === 'error'}
		<span>Error: {$_chatList.error.message}</span>
	{:else}
		<ChatList>
			{#each chatStore.chats as chat}
				{#if chat}
					<ChatListItem id={chat.id} name={chat.name} infos="" />
				{:else}
					<pre>{JSON.stringify(chat, null, 2)}</pre>
				{/if}
			{/each}
		</ChatList>
	{/if}
</div>
