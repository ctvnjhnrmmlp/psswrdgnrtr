import { useEffect, useRef } from 'react';
import { Container, Spacer, Card } from '@nextui-org/react';
import { FaCopy, FaRandom } from 'react-icons/fa';
import {
	usePasswordStore,
	usePasswordControlsStore,
} from '../contexts/password';
import PasswordInput from '../components/PasswordInput';
import PasswordButton from '../components/PasswordButton';
import PasswordBadge from '../components/PasswordBadge';
import generatePassword from '../utilities/generatePassword';

export default function Password() {
	const passwordInputRef = useRef<HTMLInputElement>(null);
	const password = usePasswordStore((state) => state.password);
	const length = usePasswordStore((state) => state.length);
	const copied = usePasswordControlsStore((state) => state.copied);
	const uppercases = usePasswordControlsStore((state) => state.uppercases);
	const lowercases = usePasswordControlsStore((state) => state.lowercases);
	const numbers = usePasswordControlsStore((state) => state.numbers);
	const symbols = usePasswordControlsStore((state) => state.symbols);
	const setPassword = usePasswordStore((state) => state.setPassword);
	const setCopied = usePasswordControlsStore((state) => state.setCopied);

	useEffect(() => {
		const initialPassword = generatePassword(
			{
				uppercases,
				lowercases,
				numbers,
				symbols,
			},
			length
		);

		setPassword(initialPassword);
	}, []);

	const handleGeneratePassword = () => {
		const generatedPassword = generatePassword(
			{
				uppercases,
				lowercases,
				numbers,
				symbols,
			},
			length
		);

		setPassword(generatedPassword);

		if (copied) setCopied();
	};

	const handleCopyPassword = () => {
		if (passwordInputRef.current != null)
			navigator.clipboard.writeText(passwordInputRef.current.value);

		if (!copied) setCopied();

		alert('✅ Password copied to clipboard.');
	};

	return (
		<Card variant='bordered'>
			<Card.Body>
				<Container
					fluid
					css={{
						padding: '1.5vw',
					}}
				>
					<Container
						fluid
						css={{
							display: 'flex',
							justifyContent: 'space-evenly',
							alignItems: 'center',
						}}
					>
						<PasswordInput password={password} ref={passwordInputRef} />
					</Container>
					<Spacer y={1.5} />
					<Container
						css={{
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						{length <= 6 ? (
							<PasswordBadge content='Bad password' size='xl' color='error' />
						) : length >= 7 && length <= 10 ? (
							<PasswordBadge
								content='Weak password'
								size='xl'
								color='warning'
							/>
						) : (
							<PasswordBadge
								content='Strong password'
								size='xl'
								color='primary'
							/>
						)}
						{copied ? (
							<PasswordBadge
								content={'Password copied'}
								size='xl'
								color='success'
							/>
						) : (
							<PasswordBadge
								content={'Password not copied'}
								size='xl'
								color='error'
							/>
						)}
					</Container>
					<Spacer y={1.5} />
					<Container
						css={{
							display: 'flex',
							width: '30%',
							marginInline: 'auto',
							justifyContent: 'space-evenly',
						}}
					>
						<PasswordButton
							label='Copy password'
							icon={<FaCopy />}
							handleOperation={handleCopyPassword}
						/>
						<PasswordButton
							label='Generate password'
							icon={<FaRandom />}
							handleOperation={handleGeneratePassword}
						/>
					</Container>
				</Container>
			</Card.Body>
		</Card>
	);
}
