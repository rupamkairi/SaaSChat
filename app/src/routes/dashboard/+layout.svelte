<script lang="ts">
	import { dashboardStatusStates } from '$src/constants/statuses';
	import { authStore } from '$src/store/auth.svelte';
	import { dashboardState } from '$src/store/dashboard.svelte';

	dashboardState.set(dashboardStatusStates.LOADING);

	setTimeout(() => {
		authStore.isAuthenticated = true;

		const user_id = localStorage.getItem('user_id');
		const auth_id = localStorage.getItem('auth_id');

		if (!user_id || !auth_id) {
			dashboardState.set(dashboardStatusStates.ERROR);
			return;
		}

		authStore.auth = { id: +auth_id!, user_id: +user_id! };
		// authStore.auth = { id: 2, user_id: 3 };
		dashboardState.set(dashboardStatusStates.LOADED);
	}, 0);
</script>

<main>
	{#if $dashboardState === dashboardStatusStates.LOADING}
		<p>Loading...</p>
	{:else}
		<slot />
	{/if}
</main>
