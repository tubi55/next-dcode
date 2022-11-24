import { selectorFamily } from 'recoil';

export const getYoutube = selectorFamily({
	key: 'youtube',
	get: () => async () => {
		const data = await fetch('http://localhost:3000/api/youtube');
		const result = await data.json();
		return result.items;
	},
});
