import { Button, PressEvent } from '@nextui-org/react';
import { ReactNode } from 'react';

type PasswordButtonProps = {
	label: string;
	icon: ReactNode;
	handleOperation: (e: PressEvent) => void;
};

export default function PasswordButton({
	label,
	icon,
	handleOperation,
}: PasswordButtonProps) {
	return (
		<Button
			aria-label={label}
			color='primary'
			auto
			rounded
			icon={icon}
			onPress={handleOperation}
		/>
	);
}
