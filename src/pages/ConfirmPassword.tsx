import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

type ContextType = {
	setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
	confirmPasswordInputRef: React.RefObject<HTMLInputElement>;
	isLoading: boolean;
};
const ConfirmPassword: React.FC = () => {
	const [password, setPassword] = useState('');
	const [isFailed, setIsFailed] = useState(false);
	const [previousIsLoading, setPreviousIsLoading] = useState(false);
	const { setConfirmPassword, confirmPasswordInputRef, isLoading } =
		useOutletContext<ContextType>();

	const handlePasswordChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		setIsFailed(false);
		setConfirmPassword(event.target.value);
		setPassword(event.target.value);
	};

	useEffect(() => {
		if (previousIsLoading && !isLoading && password.trim() !== '') {
			setIsFailed(true);
		}
		setPreviousIsLoading(isLoading);
	}, [isLoading, password, previousIsLoading]);

	return (
		<div className='my-2'>
			<input
				ref={confirmPasswordInputRef}
				className='w-full rounded-lg border border-gray-300 p-4 focus:border-blue-500 focus:outline-none'
				type='password'
				placeholder='Password'
				value={password}
				onChange={handlePasswordChange}
			/>
			{isFailed && (
				<p className='text-red-500'>
					The password that you've entered is incorrect.
				</p>
			)}
		</div>
	);
};

export default ConfirmPassword;
