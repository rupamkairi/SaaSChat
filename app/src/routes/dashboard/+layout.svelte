<script lang="ts">
	import { dashboardStatusStates } from '$src/constants/statuses';
	import { authUser, isAuthenticated } from '$src/store/auth.store';
	import { dashboardState } from '$src/store/dashboard.store';

	dashboardState.set(dashboardStatusStates.LOADING);

	setTimeout(() => {
		isAuthenticated.set(true);
		authUser.set({ user_id: 3 });
		dashboardState.set(dashboardStatusStates.LOADED);
	}, 2000);
</script>

<main>
	{#if $dashboardState === dashboardStatusStates.LOADING}
		<p>Loading...</p>
	{:else}
		<slot />
	{/if}
</main>
