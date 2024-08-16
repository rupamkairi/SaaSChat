<script>
	import { apis } from '$src/constants/apis';
	import { apiFetch } from '$src/utils/api-helpers/api-fetch';
	import { onMount } from 'svelte';
	import MessageButton from './components/actions/message-button.svelte';
	import MessageInputGroup from './components/actions/message-input-group.svelte';
	import MessageInput from './components/actions/message-input.svelte';
	import Content from './components/content.svelte';
	import Footer from './components/footer.svelte';
	import Header from './components/header.svelte';
	import MessageBubbleGroup from './components/messages/message-bubble-group.svelte';
	import MessageBubble from './components/messages/message-bubble.svelte';
	import Window from './components/window.svelte';
	import { teamId } from './config';

	let teamName = '';
	onMount(async () => {
		const { team } = await apiFetch({ api: apis.teams.team(teamId) });
		// console.log(team);
		teamName = team.name;
	});
</script>

<div>
	<div class="fixed bottom-4 right-4">
		<!-- <button class="px-4 py-2 rounded-full border flex justify-center items-center gap-2">
			<span class="text-lg">Chat</span>
			<span><Icon icon="solar:chat-round-line-bold-duotone" class="h-6 w-6" /></span>
		</button> -->
		<!-- <button class="px-4 py-2 rounded-full border flex justify-center items-center gap-2">
			<span class="text-lg">Close</span>
			<span><Icon icon="solar:close-circle-bold-duotone" class="h-6 w-6" /></span>
		</button> -->
	</div>
	<Window>
		<Header headerText={teamName} />
		<Content>
			<!-- <svelte:fragment>
				<br />

				<MessageBubbleGroup>
					<img
						slot="avatar"
						class="w-8 h-8 rounded-full shadow"
						src="https://placehold.co/32"
						alt=""
					/>
					<svelte:fragment slot="body">
						<MessageBubble text={'Lorem ipsum dolor sit amet?'} />
						<MessageBubble
							text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In hic odit error excepturi, optio dicta aperiam quasi esse doloribus odio officiis voluptatum neque. Accusamus facere ea quidem tenetur illum expedita.'}
						/>
					</svelte:fragment>
				</MessageBubbleGroup>

				<div class="flex flex-row-reverse flex-wrap-reverse gap-2">
					<MessageButton text="Just Browsing" />
					<MessageButton text="I have few questions" />
					<MessageButton text="I'd like to learn about SaaSChat" />
				</div>
			</svelte:fragment> -->

			<svelte:fragment slot="message-input">
				<MessageInputGroup>
					<MessageInput />
				</MessageInputGroup>
			</svelte:fragment>
		</Content>

		<Footer />
	</Window>
</div>
