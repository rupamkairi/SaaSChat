// import { setContext } from 'svelte';
import { writable } from 'svelte/store';
// import { LayoutStateKeys } from './states';

enum LayoutElementSizing {
	hidden,
	default
	// expanded,
	// collapsed,
	// xs,
	// sm,
	// md,
	// lg,
	// xl
}

export const sidebar = writable(LayoutElementSizing.default);

sidebar.set(LayoutElementSizing.default);

sidebar.subscribe((value) => {
	console.log(value);
});

sidebar.update((value) => value);

export function sidebarToggle() {
	sidebar.update((_sidebar) => {
		switch (_sidebar) {
			case LayoutElementSizing.default:
				return LayoutElementSizing.hidden;

			default:
				return LayoutElementSizing.default;
		}
	});
}

// const clients = writable(LayoutElementSizing.default);
// const chats = writable(LayoutElementSizing.default);

export const infos = writable(LayoutElementSizing.default);

export function infosToggle() {
	infos.update((_infos) => {
		switch (_infos) {
			case LayoutElementSizing.default:
				return LayoutElementSizing.hidden;

			default:
				return LayoutElementSizing.default;
		}
	});
}

// setContext(LayoutStateKeys.sidebar, sidebar);
// setContext(LayoutStateKeys.clients, clients);
// setContext(LayoutStateKeys.chats, chats);
// setContext(LayoutStateKeys.infos, infos);
