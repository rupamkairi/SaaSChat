const baseURL = import.meta.env.VITE_API_URL;

export type ApiFetchProps = { api: string };
export async function apiFetch({ api }: ApiFetchProps) {
	try {
		const url = `${baseURL}${api}`;
		const res = await fetch(url);
		if (res.ok) {
			const { results }: { results: any } = await res.json();
			return results;
		}
	} catch (error) {
		console.error(error);
	}
}
