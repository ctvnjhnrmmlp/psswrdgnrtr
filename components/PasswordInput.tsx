import { Input } from '@nextui-org/react';
import { Ref } from 'react';
import { forwardRef } from 'react';

type PasswordInputProps = {
	password: string;
};

const PasswordInput = forwardRef(
	(props: PasswordInputProps, ref: Ref<HTMLInputElement>) => {
		const { password } = props;

		return (
			<Input
				aria-label='Password'
				size='xl'
				underlined
				value={password}
				ref={ref}
				css={{
					width: '100%',
				}}
			/>
		);
	}
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;
