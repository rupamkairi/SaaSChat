<script lang="ts">
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import { onDestroy, onMount } from 'svelte';

	let element: Element;
	let editor: Editor;
	export let content;

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit],
			content: '',
			onTransaction: () => {
				editor = editor;
				// content = editor.getJSON();
				content = editor.getText();
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

<div class="p-2 text-sm flex-grow rounded border overflow-y-scroll outline-none">
	<div bind:this={element}></div>
</div>
