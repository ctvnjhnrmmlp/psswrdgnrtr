import { CSS, Badge, VariantProps } from '@nextui-org/react';
import { ReactElement } from 'react';

type PasswordBadgeProps = {
	content: ReactElement<any, any> | string;
	size: VariantProps<string>;
	color: VariantProps<string>;
	css?: CSS;
};

export default function PasswordBadge({
	content,
	size,
	color,
	css = {},
}: PasswordBadgeProps) {
	return (
		<Badge size={size} color={color} css={css}>
			{content}
		</Badge>
	);
}
