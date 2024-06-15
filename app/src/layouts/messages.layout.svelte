<script>
	import { createQuery } from '@tanstack/svelte-query';
	import Header from './messages/header.svelte';
	import MessageBubble from './messages/message-bubble.svelte';
	import MessageInput from './messages/message-input.svelte';
	import MessageList from './messages/message-list.svelte';
	import MessageSeparator from './messages/message-separator.svelte';
	import { apiFetch } from '$src/utils/api-helpers/api-fetch';
	import { apis } from '$src/constants/apis';
	import { formatTime } from '$src/utils/datetime-helpers';

	const user_id = 2,
		chat_id = 1;

	const _messageList = createQuery({
		queryKey: ['messageList'],
		queryFn: async () => {
			const data = await apiFetch({ api: apis.chats.messages(chat_id).index });
			return data.messages;
		}
	});

	console.log($_messageList.data);
</script>

<div class="bg-slate-50 h-screen flex-grow shadow-md flex flex-col">
	<Header />

	{#if $_messageList.status === 'pending'}
		<span>Loading...</span>
	{:else if $_messageList.status === 'error'}
		<span>Error: {$_messageList.error.message}</span>
	{:else}
		<MessageList>
			<!-- <MessageSeparator text="Yesterday" /> -->
			{#each $_messageList.data as message}
				<MessageBubble
					self={message.user_id === user_id ? true : false}
					name="John Doe"
					info={formatTime(message.created_at)}
					content={message.text}
				/>
			{/each}
			<!-- <MessageBubble
				self={true}
				name="Jane Doe"
				info="4:50 PM"
				content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi modi consequatur
								consequuntur perspiciatis voluptas debitis mollitia! Maiores aspernatur maxime odit
								nisi quis, consequuntur consequatur cum --"
				reference="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus expedita
								eligendi voluptatum magni repellendus illum reprehenderit alias dolores"
			/> -->
		</MessageList>
	{/if}
	<MessageInput />
</div>
