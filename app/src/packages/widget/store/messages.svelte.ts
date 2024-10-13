type ChatStore = {
	selected_ChatId: number;
};

type Message = {
	id: number;
	text: string;
	user_id: number;

	user__name?: string;
	user__is_guest?: boolean;
};

type MessagesStore = {
	messages: Message[];
};

export const chatStore = $state<ChatStore>({
	selected_ChatId: 0
});

export const messagesStore = $state<MessagesStore>({
	messages: []
});
