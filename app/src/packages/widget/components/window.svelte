<script>
	import { apis } from '$src/constants/apis';
	import { apiFetch } from '$src/utils/api-helpers/api-fetch';
	import { Connector } from '$src/websocket';
	import { createQuery } from '@tanstack/svelte-query';
	import { onMount } from 'svelte';
	import { stateStore } from '../store/state.svelte';
	import { guestStore } from '../store/user.svelte';
	import { connectWithGuest, connectWithPing } from './connect';
	import Messages from './messages/messages.svelte';

	let { children } = $props();

	async function getNewGuestId() {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(1);
			}, 1000);
		});
	}

	onMount(async () => {
		// console.log('onMount');

		let savedGuestId = parseInt(localStorage?.getItem('guestId') ?? '0');
		if (!savedGuestId) {
			savedGuestId = await getNewGuestId();
		}

		guestStore.guest.id = savedGuestId;
		stateStore.guestLoad = true;

		connectWithPing();
		connectWithGuest();

		$_user.refetch();
	});

	const _user = createQuery({
		queryKey: ['user'],
		queryFn: async () => {
			// console.log('queyFn');
			const data = await apiFetch({ api: apis.users.user(guestStore.guest.id) });
			guestStore.user = data.user;
			return data.user;
		}
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
