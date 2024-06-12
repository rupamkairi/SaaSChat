<script>
	import Icon from '@iconify/svelte';
	import { infosToggle } from '$src/store/layouts.store';
</script>

<div class="bg-slate-50 h-screen flex-grow shadow-md flex flex-col">
	<div class="py-4 px-3 border-b bg-white">
		<div class="flex justify-between items-center">
			<h2 class="font-bold">(207) 555-0199</h2>
			<button
				class="p-1.5 hover:bg-slate-100 rounded shadow"
				on:click={() => {
					infosToggle();
				}}
			>
				<Icon icon="solar:sidebar-minimalistic-outline" />
			</button>
		</div>
	</div>
	<div class="flex-grow flex flex-col-reverse overflow-scroll">
		<div>
			<p class="my-1 text-center text-xs text-slate-400">Tuesday, 26 September (Older Message)</p>
			<div class="">
				<div class="flex flex-row gap-3 px-3 my-2">
					<div class="place-self-end w-8">
						<img
							class="min-w-[2rem] min-h-[2rem] max-w-full rounded-full shadow"
							src="https://randomuser.me/api/portraits/lego/1.jpg"
							alt=""
						/>
					</div>
					<div class="max-w-xl">
						<p class="text-left pb-1 text-xs">
							<span class="text-slate-600 font-bold">(207) 555-0199</span>
							<span class="text-slate-400">4:50 PM</span>
						</p>
						<div class="bg-slate-300 py-2 px-4 rounded">
							<p class="text-sm text-gray-500 leading-normal">
								<span class="text-justify">
									Lorem ipsum dolor sit consectetur adipisicing doloremque...
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<p class="my-1 text-center text-xs text-slate-400">Today, 3 October (Newer Message)</p>
			<div class="">
				<div class="flex flex-row-reverse gap-3 px-3 my-2">
					<div class="place-self-end w-8">
						<img
							class="min-w-[2rem] min-h-[2rem] max-w-full rounded-full shadow"
							src="https://randomuser.me/api/portraits/lego/2.jpg"
							alt=""
						/>
					</div>
					<div class="max-w-xl">
						<p class="text-right pb-1 text-xs">
							<span class="text-slate-600 font-bold">(207) 555-0199</span>
							<span class="text-slate-400">4:50 PM</span>
						</p>
						<div class="bg-slate-300 py-2 px-4 rounded">
							<p class="text-sm text-gray-500 leading-normal">
								<span class="text-justify">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi modi consequatur
									consequuntur perspiciatis voluptas debitis mollitia! Maiores aspernatur maxime
									odit nisi quis, consequuntur consequatur cum --
								</span>
								<span class="text-justify">
									<a
										class="text-violet-600 hover:underline break-words"
										href="https://townhall.hashnode.com/launching-discussions"
										>https://townhall.hashnode.com/launching-discussions</a
									>
								</span>
							</p>
						</div>
						<div class="mx-4 my-2 text-gray-500 border-l-2 px-2 flex">
							<img src="" alt="" />
							<div>
								<h5 class="text-sm font-bold">Heading</h5>
								<p class="text-xs">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus expedita
									eligendi voluptatum magni repellendus illum reprehenderit alias dolores
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="h-24 max-h-48">
		<!--  -->
	</div>
</div>
