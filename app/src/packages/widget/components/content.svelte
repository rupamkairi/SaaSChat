<div class="flex-grow p-2 overflow-hidden">
	<div class="h-full flex flex-col">
		<div class="flex-grow">
			<div class="flex flex-col gap-4">
				<slot />
			</div>
		</div>

		<slot name="message-input" />
	</div>
</div>
