<script>
	import { apis } from '$src/constants/apis';
	import { apiFetch } from '$src/utils/api-helpers/api-fetch';
	import { createQuery } from '@tanstack/svelte-query';
	import { chatStore, messagesStore } from '../../store/messages.svelte';
	import { onMount } from 'svelte';

	const _messageList = createQuery({
		queryKey: ['messageList'],
		queryFn: async () => {
			const data = await apiFetch({ api: apis.chats.messages(chatStore.selected_ChatId).index });
			console.log(data.messages);
			messagesStore.messages = data.messages ?? [];
			return data.messages ?? [];
		}
	});

	onMount(() => {
		chatStore.selected_ChatId = 1;
	});

	$effect(() => {
		$_messageList.refetch();
	});

	$inspect(messagesStore);
</script>
