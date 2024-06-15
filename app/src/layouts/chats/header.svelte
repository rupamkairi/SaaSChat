<script lang="ts">
	import Icon from '@iconify/svelte';
	import { sidebarToggle } from '$src/store/layouts.store';

	export let title: string = 'Chats';
</script>

<div class="py-4 px-3 border-b bg-white">
	<div class="flex justify-between items-center">
		<h2 class="font-bold">{title}</h2>
		<button
			class="p-1.5 hover:bg-slate-100 rounded shadow"
			on:click={() => {
				sidebarToggle();
			}}
		>
			<Icon icon="solar:sidebar-minimalistic-outline" />
		</button>
	</div>
</div>
