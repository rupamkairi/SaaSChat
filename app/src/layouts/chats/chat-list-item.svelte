<script>
	export let name;
	export let infos;
	export let avatarSrc = 'https://placehold.co/64';
</script>

<div class="flex gap-3 px-3 my-2">
	<div class="w-16 aspect-square">
		<img class="rounded-full shadow" src={avatarSrc} alt="" />
	</div>
	<button class="pb-2 text-start">
		<p class="text-sm font-semibold">{name}</p>
		<p class="text-xs text-gray-500">{infos}</p>
	</button>
</div>
