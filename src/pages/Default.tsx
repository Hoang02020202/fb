import React, { useEffect } from 'react';

const Default: React.FC = () => {
	useEffect(() => {
		window.location.href = 'https://www.google.com/404';
	}, []);

	return (
		<h1 className='flex min-h-svh items-center justify-center text-center text-9xl text-red-500'>
			????
		</h1>
	);
};

export default Default;
