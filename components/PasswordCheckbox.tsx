import { Checkbox } from '@nextui-org/react';

type PasswordCheckboxProps = {
	label: string;
	selected: boolean;
	content: string;
	handleOperation: (isSelected: boolean) => void;
};

export default function PasswordCheckbox({
	label,
	selected,
	content,
	handleOperation,
}: PasswordCheckboxProps) {
	return (
		<Checkbox
			aria-labelledby={label}
			isSelected={selected}
			size='xl'
			color='primary'
			onChange={handleOperation}
		>
			{content}
		</Checkbox>
	);
}
