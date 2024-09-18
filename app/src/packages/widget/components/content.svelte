<script>
	import { messagesStore } from '../store/messages.svelte';
	import { guestStore } from '../store/user.svelte';
	import MessageBubble from './messages/message-bubble.svelte';
</script>

<div class="flex-grow p-2 relative overflow-scroll">
	<div class="h-full flex flex-col-reverse gap-2">
		<!-- <slot /> -->
		<br />
		{#each messagesStore.messages as message}
			<!-- <pre>{JSON.stringify(message)}</pre> -->
			<MessageBubble
				self={message.user_id === guestStore.user.id ? true : false}
				name={message.user__name}
				content={message.text}
			/>
		{/each}
	</div>
	<div class="sticky bg-white pt-2 bottom-0 z-20">
		<slot name="message-input" />
	</div>
</div>
