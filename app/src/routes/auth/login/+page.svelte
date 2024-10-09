<script lang="ts">
	import { goto } from '$app/navigation';
	import { apis } from '$src/constants/apis';
	import { routes } from '$src/constants/routes';
	import { apiFetch, baseURL } from '$src/utils/api-helpers/api-fetch';
	import ky from 'ky';

	let username = '';
	let password = '';

	async function submitLogin(event: SubmitEvent) {
		event.preventDefault();
		console.log(username, password);
		const url = `${baseURL}${apis.auth.login}`;
		const { user } = await ky.post(url, { json: { username, password } }).json();

		localStorage.setItem('user_id', user.id);
		localStorage.setItem('auth_id', user.auth_id);

		goto(routes.dashboard.root);
	}
</script>

<div class="h-screen flex justify-center items-center">
	<form class="" on:submit={submitLogin}>
		<h1 class="text-xl font-bold text-center">Login</h1>
		<input class="block" type="text" name="username" placeholder="Username" bind:value={username} />
		<input class="block" type="text" name="Password" placeholder="Password" bind:value={password} />
		<button class="block w-full py-2 bg-gray-200 text-center" type="submit">Login</button>
	</form>
</div>
