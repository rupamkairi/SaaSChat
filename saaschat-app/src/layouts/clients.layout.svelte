<script>
	import Icon from '@iconify/svelte';
	import { sidebarToggle } from '../store/layouts.state';
	import { listMessagesBetween } from '../utils/messages/list';
	import { USERS } from '../utils/messages';

	function handleChangeChat({ sender_id = '' }) {
		listMessagesBetween({ receiver_id: USERS.admin, sender_id });
	}
</script>

<div class="bg-white border-x h-screen flex-grow shadow-md flex flex-col overflow-scroll">
	<div class="py-4 px-3 border-b bg-white">
		<div class="flex justify-between items-center">
			<h2 class="font-bold">Clients</h2>
			<button
				class="p-1.5 hover:bg-slate-100 rounded shadow"
				on:click={() => {
					sidebarToggle();
				}}
			>
				<Icon icon="solar:sidebar-minimalistic-outline" />
			</button>
		</div>
	</div>
	<div class="my-4 mx-3">
		<button class="px-4 py-1 bg-white rounded shadow text-sm">Active</button>
	</div>
	<div class="">
		<div class="">
			<div class="flex gap-3 px-3 my-2">
				<div class="w-16">
					<img
						class="rounded-full shadow"
						src="https://randomuser.me/api/portraits/lego/1.jpg"
						alt=""
					/>
				</div>
				<button
					class="pb-2 text-start"
					on:click={() => handleChangeChat({ sender_id: USERS.customer1 })}
				>
					<p class="text-sm font-semibold">Customer 1</p>
					<p class="text-xs text-gray-500">
						Lorem ipsum dolor sit consectetur adipisicing doloremque...
					</p>
				</button>
			</div>
			<div class="flex gap-3 px-3 my-2">
				<div class="w-16">
					<img
						class="rounded-full shadow"
						src="https://randomuser.me/api/portraits/lego/1.jpg"
						alt=""
					/>
				</div>
				<button
					class="pb-2 text-start"
					on:click={() => handleChangeChat({ sender_id: USERS.customer2 })}
				>
					<p class="text-sm font-semibold">Customer 2</p>
					<p class="text-xs text-gray-500">
						Lorem ipsum dolor sit consectetur adipisicing doloremque...
					</p>
				</button>
			</div>
			<div class="h-screen" />
			<div class="flex gap-3 px-3 my-2">
				<div class="w-16">
					<img
						class="rounded-full shadow"
						src="https://randomuser.me/api/portraits/lego/1.jpg"
						alt=""
					/>
				</div>
				<div class="">
					<p class="text-sm font-semibold">(207) 555-0199</p>
					<p class="text-xs text-gray-500">
						Lorem ipsum dolor sit consectetur adipisicing doloremque...
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
