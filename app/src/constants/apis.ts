type id = string | number;
export const apis = {
	teams: {
		index: '/teams',
		team: (teamId: id) => `/teams/${teamId}`,
		chats: (teamId: id) => ({
			index: `/teams/${teamId}/chats`,
			chat: (chatId: id) => `/teams/${teamId}/chats/${chatId}`
		})
	}
};
