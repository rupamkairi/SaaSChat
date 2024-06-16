<script lang="ts">
	import { apis } from '$src/constants/apis';
	import { user_TeamId } from '$src/store/user.store';
	import { apiFetch } from '$src/utils/api-helpers/api-fetch';
	import { createQuery } from '@tanstack/svelte-query';
	import ChatListItem from './chats/chat-list-item.svelte';
	import ChatList from './chats/chat-list.svelte';
	import Header from './chats/header.svelte';

	const _chatList = createQuery({
		queryKey: ['chatList', user_TeamId],
		queryFn: async () => {
			if (!user_TeamId) return [];
			const data = await apiFetch({ api: apis.teams.chats($user_TeamId).index });
			return data.chats;
		}
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
			{#each $_chatList.data as chat}
				{#if chat}
					<ChatListItem name={chat.name} infos="" />
				{:else}
					<pre>{JSON.stringify(chat, null, 2)}</pre>
				{/if}
			{/each}
		</ChatList>
	{/if}
</div>
