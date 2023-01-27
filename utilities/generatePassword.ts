import {
	UPPERCASE_LETTERS,
	LOWERCASE_LETTERS,
	NUMBERS,
	SYMBOLS,
	UPPERCASE_LETTERS_RANGE,
	LOWERCASE_LETTERS_RANGE,
	NUMBERS_RANGE,
} from '../constants/variables';

type ControlStates = {
	uppercases: boolean;
	lowercases: boolean;
	numbers: boolean;
	symbols: boolean;
};

interface CharacterGenerator {
	uppercases: () => string;
	lowercases: () => string;
	numbers: () => string;
	symbols: () => string;
}

const getRandomUppercase = () => {
	return String.fromCharCode(
		Math.floor(Math.random() * UPPERCASE_LETTERS.length) +
			UPPERCASE_LETTERS_RANGE
	);
};

const getRandomLowercase = () => {
	return String.fromCharCode(
		Math.floor(Math.random() * LOWERCASE_LETTERS.length) +
			LOWERCASE_LETTERS_RANGE
	);
};

const getRandomNumber = () => {
	return String.fromCharCode(
		Math.floor(Math.random() * NUMBERS.length) + NUMBERS_RANGE
	);
};

const getRandomSymbol = () => {
	return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
};

const characterGenerators: CharacterGenerator = {
	uppercases: getRandomUppercase,
	lowercases: getRandomLowercase,
	numbers: getRandomNumber,
	symbols: getRandomSymbol,
};

const generatePassword = (
	controlStates: ControlStates,
	length: number
): string => {
	const { uppercases, lowercases, numbers, symbols } = controlStates;
	let characterVariations = 0;
	let filteredControlStates;
	let generatedPassword = '';
	let finalPassword = '';

	if (uppercases) characterVariations += 1;

	if (lowercases) characterVariations += 1;

	if (numbers) characterVariations += 1;

	if (symbols) characterVariations += 1;

	if (characterVariations === 0) {
		return '';
	}

	filteredControlStates = [
		{ uppercases },
		{ lowercases },
		{ numbers },
		{ symbols },
	].filter((item) => Object.values(item)[0]);

	for (let i = 0; i < length; i += characterVariations) {
		filteredControlStates.forEach((controlState) => {
			const characterGenerator = Object.keys(controlState)[0];

			generatedPassword +=
				characterGenerators[characterGenerator as keyof CharacterGenerator]();
		});
	}

	finalPassword = generatedPassword.slice(0, length);

	return finalPassword;
};

export default generatePassword;
