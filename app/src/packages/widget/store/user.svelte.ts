type User = {
	id: number;
	auth_id?: number;
	team_id?: number;
	name?: string;
};

type GuestStore = {
	guest: User;
	user: User;
};

export const guestStore = $state<GuestStore>({
	guest: {
		id: 0
	},
	user: {
		id: 0
	}
});
