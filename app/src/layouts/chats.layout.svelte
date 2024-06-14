<script>
	import ChatListItem from './chats/chat-list-item.svelte';
	import ChatList from './chats/chat-list.svelte';
	import Header from './chats/header.svelte';
</script>

<div class="bg-white border-x h-screen flex-grow shadow-md flex flex-col overflow-scroll">
	<Header />
	<div class="my-4 mx-3">
		<button class="px-4 py-1 bg-white rounded shadow text-sm">Active</button>
	</div>
	<ChatList>
		<ChatListItem
			name="Customer 1"
			infos="Lorem ipsum dolor sit consectetur adipisicing doloremque..."
		/>
	</ChatList>
</div>
