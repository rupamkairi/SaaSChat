<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let self: boolean = false;
	export let name: string;
	// export let info: string;
	export let avatarSrc: string = 'https://placehold.co/32';
	export let content: string = '';
	// export let reference: string = '';
</script>

<div class={twMerge('flex flex-row gap-3 px-3', self && 'flex-row-reverse')}>
	{#if !self}
		<div class="place-self-end w-8">
			<img
				class="min-w-[2rem] min-h-[2rem] max-w-full rounded-full shadow"
				src={avatarSrc}
				alt=""
			/>
		</div>
	{/if}
	<div class="max-w-xl">
		<p class={twMerge('text-left pb-1 text-xs', self ? 'text-right' : 'text-left')}>
			<span class="text-slate-600 font-bold">{name}</span>
			<!-- <span class="text-slate-400">{info}</span> -->
		</p>
		<div class="bg-slate-300 py-2 px-4 rounded-lg">
			<p class="text-sm text-gray-500 leading-normal">
				<span class="text-justify"> {content} </span>
			</p>
		</div>
		<!-- <div class="mx-4 my-2 text-gray-500 border-l-2 px-2 flex">
			<img src="" alt="" />
			<div>
				<h5 class="text-sm font-bold">Heading</h5>
				<p class="text-xs">{reference}</p>
			</div>
		</div> -->
	</div>
</div>
