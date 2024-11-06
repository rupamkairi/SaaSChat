<script>
	import { apis } from '$src/constants/apis';
	import { apiFetch } from '$src/utils/api-helpers/api-fetch';
	import { createQuery } from '@tanstack/svelte-query';
	import { chatStore, messagesStore } from '../../store/messages.svelte';
	import { onMount } from 'svelte';
	import { stateStore } from '../../store/state.svelte';

	async function getNewChatId() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(1);
			}, 1000);
		});
	}

	onMount(async () => {
		// console.log('onMount');

		let savedChatId = parseInt(localStorage?.getItem('chatId') ?? '0');
		if (!savedChatId) {
			savedChatId = await getNewChatId();
		}

		chatStore.selected_ChatId = savedChatId;
	});

	const _messageList = createQuery({
		queryKey: ['messageList'],
		queryFn: async () => {
			// console.log('queyFn');
			const data = await apiFetch({ api: apis.chats.messages(chatStore.selected_ChatId).index });
			console.log(data.messages);
			messagesStore.messages = data.messages ?? [];
			return data.messages ?? [];
		}
	});

	$effect(() => {
		if (!stateStore.guestLoad) return;
		$_messageList.refetch();
	});

	$inspect(messagesStore);
</script>
