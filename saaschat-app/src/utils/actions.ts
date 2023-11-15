export const actions = Object.freeze({
	unknown: 0,
	connect: 1,
	disconnect: 2,
	users: 11,
	messages: 12,

	widget_connect: 101,
	widget_disconnect: 199,

	dashboard_connect: 201,
	dashboard_disconnect: 299,

	users_create: 1101,
	users_get_all: 1111,
	users_update_by_id: 1121,

	messages_send: 1201,
	messages_get_all: 1202,
	messages_get_between: 1203,

	ping: 1,
	heartbeat: 2
});
