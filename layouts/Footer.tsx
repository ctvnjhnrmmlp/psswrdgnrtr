import { Card, Text } from '@nextui-org/react';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer>
			<Card variant='bordered'>
				<Card.Body>
					<Text
						h3
						b
						css={{
							marginInline: 'auto',
						}}
					>
						<Link href={'https://ctvnjhnrmmlp.github.io/'} target='_blank'>
							John Rommel Octaviano
						</Link>
					</Text>
					<Text
						css={{
							marginInline: 'auto',
						}}
					>
						@psswrdgnrtr {new Date().getFullYear().toString()}. All Rights
						Reserved.
					</Text>
				</Card.Body>
			</Card>
		</footer>
	);
}
