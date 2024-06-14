<script lang="ts">
	import Icon from '@iconify/svelte';
	import { infosToggle } from '$src/store/layouts.store';
</script>

<div class="py-4 px-3 border-b bg-white">
	<div class="flex justify-between items-center">
		<h2 class="font-bold">(207) 555-0199</h2>
		<button
			class="p-1.5 hover:bg-slate-100 rounded shadow"
			on:click={() => {
				infosToggle();
			}}
		>
			<Icon icon="solar:sidebar-minimalistic-outline" />
		</button>
	</div>
</div>
