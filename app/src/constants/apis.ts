type id = string | number;
export const apis = {
	teams: {
		index: '/teams',
		team: (teamId: id) => `/teams/${teamId}`,
		chats: (teamId: id) => ({
			index: `/teams/${teamId}/chats`,
			chat: (chatId: id) => `/teams/${teamId}/chats/${chatId}`
		})
	},

	chats: {
		index: '/chats',
		chat: (chatId: id) => `/chats/${chatId}`,
		messages: (chatId: id) => ({
			index: `/chats/${chatId}/messages`,
			message: (messageId: id) => `/chats/${chatId}/messages/${messageId}`
		})
	}
};
