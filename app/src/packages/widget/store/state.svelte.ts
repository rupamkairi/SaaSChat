type AppState = {
	guestLoad: boolean;
};

export const stateStore = $state<AppState>({
	guestLoad: false
});
