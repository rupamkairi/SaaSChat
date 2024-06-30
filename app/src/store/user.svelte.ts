type User = {
	id: number;
	auth_id: number;
	team_id: number;
	name?: string;
};

type Store = {
	user: User;
};

export const userStore = $state<Store>({
	user: {
		id: 0,
		auth_id: 0,
		team_id: 0
	}
});
