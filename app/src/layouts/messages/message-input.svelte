<script lang="ts">
	import Tiptap from '$src/components/editor/Tiptap.svelte';
	import { chatStore } from '$src/store/chats.svelte';
	import { userStore } from '$src/store/user.svelte';
	import { actions } from '$src/utils/actions';
	import { Connector } from '$src/websocket';
	import Icon from '@iconify/svelte';

	let content: any;

	function handleSendMessage() {
		console.log(chatStore.selected_ChatId, content);
		const data = {
			action: `${actions.messages}:${actions.messages_send}`,
			data: {
				chat_id: chatStore.selected_ChatId,
				user_id: userStore.user.id,
				content
			}
		};
		Connector.send(data);
	}
</script>

<div class="p-3 max-h-24 h-full">
	<div class="h-full w-full flex gap-1">
		<Tiptap bind:content />
		<div class="flex flex-col gap-2">
			<button class="w-8 h-8 pl-1 bg-slate-200 rounded" on:click={handleSendMessage}>
				<Icon icon="iconamoon:send-duotone" class="w-6 h-6" />
			</button>
			<!-- <button class="w-6 h-6 pl-1 bg-slate-200 rounded">
				<Icon icon="iconamoon:attachment" class="w-4 h-4" />
			</button> -->
		</div>
	</div>
</div>
