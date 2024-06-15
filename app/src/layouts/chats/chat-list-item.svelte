<script>
	export let name;
	export let infos;
	export let avatarSrc = 'https://placehold.co/48';
</script>

<div class="flex gap-3 px-3 my-2">
	<img class="w-12 h-12 aspect-square rounded-full shadow" src={avatarSrc} alt="" />
	<button class="flex-grow pb-2 flex justify-start align-top">
		<p class="text-sm">{name}</p>
		<p class="text-xs text-gray-500">{infos}</p>
	</button>
</div>
