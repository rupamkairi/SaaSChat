<script>
	import Header from './messages/header.svelte';
	import MessageBubble from './messages/message-bubble.svelte';
	import MessageList from './messages/message-list.svelte';
	import MessageSeparator from './messages/message-separator.svelte';
</script>

<div class="bg-slate-50 h-screen flex-grow shadow-md flex flex-col">
	<Header />
	<MessageList>
		<MessageSeparator text="Yesterday" />

		<MessageBubble
			name="John Doe"
			info="4:50 PM"
			content="Lorem ipsum dolor sit consectetur adipisicing doloremque..."
		/>

		<MessageSeparator text="Today" />

		<MessageBubble
			self={true}
			name="Jane Doe"
			info="4:50 PM"
			content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi modi consequatur
								consequuntur perspiciatis voluptas debitis mollitia! Maiores aspernatur maxime odit
								nisi quis, consequuntur consequatur cum --"
			reference="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus expedita
								eligendi voluptatum magni repellendus illum reprehenderit alias dolores"
		/>
	</MessageList>
	<div class="h-24 max-h-48">
		<!--  -->
	</div>
</div>
