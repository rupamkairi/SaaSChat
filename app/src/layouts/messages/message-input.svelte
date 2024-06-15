<script lang="ts">
	import Tiptap from '$src/components/editor/Tiptap.svelte';
	import Icon from '@iconify/svelte';

	let message = '';

	function handleSendMessage() {
		console.log(message);
	}
</script>

<div class="p-3 max-h-24 h-full">
	<div class="h-full w-full flex gap-1">
		<!-- <textarea
			class="pt-2 px-2 pb-4 text-sm flex-grow rounded border outline-none"
			bind:value={message}
			placeholder={placeholders.widgetMessage}
		/> -->

		<Tiptap />
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
