import { Card } from '@nextui-org/react';
import { ReactElement } from 'react';

type InformationCardProps = {
	content: ReactElement<any, any>;
};

export default function InformationCard({ content }: InformationCardProps) {
	return (
		<Card variant='bordered'>
			<Card.Body>{content}</Card.Body>
		</Card>
	);
}
