import { Card, Container, Spacer } from '@nextui-org/react';
import {
	usePasswordStore,
	usePasswordControlsStore,
} from '../contexts/password';
import { useRef } from 'react';
import PasswordBadge from '../components/PasswordBadge';
import PasswordSlider from '../components/PasswordSlider';
import PasswordCheckbox from '../components/PasswordCheckbox';
import generatePassword from '../utilities/generatePassword';

export default function PasswordControls() {
	const passwordSliderRef = useRef<HTMLInputElement>(null);
	const length = usePasswordStore((state) => state.length);
	const copied = usePasswordControlsStore((state) => state.copied);
	const uppercases = usePasswordControlsStore((state) => state.uppercases);
	const lowercases = usePasswordControlsStore((state) => state.lowercases);
	const numbers = usePasswordControlsStore((state) => state.numbers);
	const symbols = usePasswordControlsStore((state) => state.symbols);
	const setPassword = usePasswordStore((state) => state.setPassword);
	const setLength = usePasswordStore((state) => state.setLength);
	const setCopied = usePasswordControlsStore((state) => state.setCopied);
	const setUppercases = usePasswordControlsStore(
		(state) => state.setUppercases
	);
	const setLowercases = usePasswordControlsStore(
		(state) => state.setLowercases
	);
	const setNumbers = usePasswordControlsStore((state) => state.setNumbers);
	const setSymbols = usePasswordControlsStore((state) => state.setSymbols);

	const handleSetLengthPassword = () => {
		if (passwordSliderRef.current != null) {
			const generatedPassword = generatePassword(
				{
					uppercases,
					lowercases,
					numbers,
					symbols,
				},
				Number.parseInt(passwordSliderRef.current.value)
			);

			setLength(Number.parseInt(passwordSliderRef.current.value));
			setPassword(generatedPassword);

			if (copied) setCopied();
		}
	};

	return (
		<Card variant='bordered'>
			<Card.Body>
				<Container>
					<Spacer y={1} />
					<Container
						css={{
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<PasswordSlider
							length={length}
							handleOperation={handleSetLengthPassword}
							ref={passwordSliderRef}
						/>
						{length <= 6 ? (
							<PasswordBadge
								content={`Password length: ${length}`}
								size='lg'
								color='error'
								css={{
									marginTop: '2vh',
								}}
							/>
						) : length >= 7 && length <= 10 ? (
							<PasswordBadge
								content={`Password length: ${length}`}
								size='lg'
								color='warning'
								css={{
									marginTop: '2vh',
								}}
							/>
						) : (
							<PasswordBadge
								content={`Password length: ${length}`}
								size='lg'
								color='primary'
								css={{
									marginTop: '2vh',
								}}
							/>
						)}
					</Container>
					<Spacer y={2} />
					<Container
						css={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignContent: 'center',
						}}
					>
						<PasswordCheckbox
							selected={uppercases}
							label='Uppercase Checkbox'
							content='Uppercase (A-Z)'
							handleOperation={setUppercases}
						/>
						<PasswordCheckbox
							selected={lowercases}
							label='Lowercase Checkbox'
							content='Lowercase (a-z)'
							handleOperation={setLowercases}
						/>
						<PasswordCheckbox
							selected={numbers}
							label='Numbers Checkbox'
							content='Numbers (0-9)'
							handleOperation={setNumbers}
						/>
						<PasswordCheckbox
							selected={symbols}
							label='Symbols Checkbox'
							content='Symbols (*%$#)'
							handleOperation={setSymbols}
						/>
					</Container>
					<Spacer y={1} />
				</Container>
			</Card.Body>
		</Card>
	);
}
