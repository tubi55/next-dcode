import { useEffect } from 'react';
import { vidsAtom } from '../atoms';
import { getYoutube } from '../api';
import { useRecoilState, useRecoilValue } from 'recoil';

function SetData() {
	const [_, setVids] = useRecoilState(vidsAtom);
	const result = useRecoilValue(getYoutube());

	useEffect(() => {
		setVids(result);
	});

	return null;
}

export default SetData;
