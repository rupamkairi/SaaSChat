<script lang="ts">
	import { dashboardStatusStates } from '$src/constants/statuses';
	import { authStore } from '$src/store/auth.svelte';
	import { dashboardState } from '$src/store/dashboard.svelte';

	dashboardState.set(dashboardStatusStates.LOADING);

	setTimeout(() => {
		authStore.isAuthenticated = true;
		authStore.auth = { id: 1, user_id: 2 };
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
