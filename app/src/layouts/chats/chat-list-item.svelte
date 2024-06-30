<script lang="ts">
	import { chatStore } from '$src/store/chats.svelte';

	export let id: number;
	export let name;
	export let infos;
	export let avatarSrc = 'https://placehold.co/48';

	function selectChat() {
		console.log('Chat selected');
		chatStore.selected_ChatId = id;
	}
</script>

<div class="flex gap-3 px-3 my-2">
	<img class="w-12 h-12 aspect-square rounded-full shadow" src={avatarSrc} alt="" />
	<button class="flex-grow pb-2 flex justify-start align-top" onclick={selectChat}>
		<p class="text-sm">{name}</p>
		<p class="text-xs text-gray-500">{infos}</p>
	</button>
</div>
