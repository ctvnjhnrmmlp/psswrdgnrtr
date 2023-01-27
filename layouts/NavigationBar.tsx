import { FaMoon, FaSun } from 'react-icons/fa';
import { Navbar, Switch, Text, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';

export default function NavigationBar() {
	const { setTheme } = useNextTheme();
	const { isDark, type } = useTheme();

	return (
		<Navbar variant='floating'>
			<Navbar.Brand
				css={{
					marginInline: 'auto',
				}}
			>
				<Text
					h1
					b
					css={{
						color: '#0A0A0A',
					}}
					size='3xl'
				>
					psswrdgnrtr
				</Text>
			</Navbar.Brand>
			<Navbar.Content>
				<Navbar.Item>
					<Switch
						size='md'
						iconOff={<FaMoon />}
						iconOn={<FaSun />}
						checked={isDark}
						onChange={(e) => {
							setTheme(e.target.checked ? 'dark' : 'light');
						}}
					/>
				</Navbar.Item>
			</Navbar.Content>
		</Navbar>
	);
}
