<script>
	import Icon from '@iconify/svelte';
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
	<div class="fixed sm:bottom-4 sm:right-4">
		<div class="w-screen h-screen sm:w-96 sm:h-[40rem]">
			<div class="h-full w-full flex flex-col rounded shadow overflow-hidden">
				<div class="p-2 bg-slate-200">
					<div class="text-xl font-black mt-4">Header</div>
				</div>
				<div class="flex-grow p-2 overflow-hidden">
					<div class="h-full flex flex-col">
						<div class="flex-grow">
							<div class="flex flex-col gap-4">
								<div>Chat</div>
								<div class="flex gap-2">
									<img
										class="w-8 h-8 rounded-full shadow"
										src="https://randomuser.me/api/portraits/lego/1.jpg"
										alt="Lego 1"
									/>
									<div class="flex flex-col gap-2">
										<div class="p-2 bg-violet-200 rounded-lg text-sm shadow shadow-violet-300">
											Lorem ipsum dolor sit amet?
										</div>
										<div class="p-2 bg-violet-200 rounded-lg text-sm shadow shadow-violet-300">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. In hic odit error
											excepturi, optio dicta aperiam quasi esse doloribus odio officiis voluptatum
											neque. Accusamus facere ea quidem tenetur illum expedita.
										</div>
									</div>
								</div>
								<div class="flex flex-row-reverse flex-wrap-reverse gap-2">
									<div class="px-4 py-2 bg-slate-100 hover:bg-slate-300 rounded text-sm">
										Just Browsing
									</div>
									<div class="px-4 py-2 bg-slate-100 hover:bg-slate-300 rounded text-sm">
										I have few questions
									</div>
									<div class="px-4 py-2 bg-slate-100 hover:bg-slate-300 rounded text-sm">
										I'd like to learn about SaaSChat
									</div>
								</div>
							</div>
						</div>
						<div class="max-h-24 h-full">
							<div class="h-full flex gap-1">
								<textarea
									class="pt-2 pb-4 text-sm flex-grow rounded border border-transparent outline-none"
									value="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In repellat laborum inventore molestias impedit enim nesciunt corrupti fugiat. Enim ducimus vel excepturi sit suscipit eos saepe similique perferendis voluptate necessitatibus."
								/>
								<div class="flex flex-col gap-2">
									<button class="w-8 h-8 pl-1 bg-slate-200 rounded">
										<Icon icon="iconamoon:send-duotone" class="w-6 h-6" />
									</button>
									<button class="w-6 h-6 pl-1 bg-slate-200 rounded">
										<Icon icon="iconamoon:attachment" class="w-4 h-4" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="p-1 bg-slate-200 text-xs">
					<div class="text-center">Footer</div>
				</div>
			</div>
		</div>
	</div>
</div>
