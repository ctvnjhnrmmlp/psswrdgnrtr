import { Container } from '@nextui-org/react';
import { ReactNode } from 'react';

type LayoutProp = {
	children: ReactNode;
};

export default function Layout({ children }: LayoutProp) {
	return (
		<Container xs fluid>
			{children}
		</Container>
	);
}
