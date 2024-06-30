type Store = {
	selected_ChatId: number;
	chats: { id: number; name: string }[];
};

export const chatStore = $state<Store>({
	selected_ChatId: 0,
	chats: []
});
