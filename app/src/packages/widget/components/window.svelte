<script>
	import { createQuery } from '@tanstack/svelte-query';
	import { guestStore } from '../store/user.svelte';
	import { onMount } from 'svelte';
	import { apiFetch } from '$src/utils/api-helpers/api-fetch';
	import { apis } from '$src/constants/apis';
	import Messages from './messages/messages.svelte';

	let { children } = $props();

	const _user = createQuery({
		queryKey: ['user'],
		queryFn: async () => {
			const data = await apiFetch({ api: apis.users.user(guestStore.guest.id) });
			// console.log(data);
			guestStore.user = data.user;
			return data.user;
		}
	});

	onMount(() => {
		guestStore.guest.id = 1;
		$_user.refetch();
	});

	$inspect(guestStore);
</script>

<div class="fixed sm:bottom-4 sm:right-4">
	<div class="w-screen h-screen sm:w-96 sm:h-[40rem]">
		<div class="h-full w-full flex flex-col rounded shadow overflow-hidden">
			<slot />
			<!-- {@render children()} -->
		</div>
	</div>
</div>
<Messages />
