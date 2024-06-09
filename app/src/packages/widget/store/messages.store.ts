import { writable } from 'svelte/store';

export const messages = writable([]);

export function loadInitialMessages(messages_ = []) {
	messages.update(() => {
		// console.log('Prev', _messages, 'New', messages_);
		return messages_;
	});
}
