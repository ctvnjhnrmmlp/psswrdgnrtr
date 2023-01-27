import { create } from 'zustand';
import { combine } from 'zustand/middleware';

interface PasswordState {
	password: string;
	length: number;
	setPassword: (password: string) => void;
	setLength: (length: number) => void;
}

interface PasswordControlsState {
	copied: boolean;
	uppercases: boolean;
	lowercases: boolean;
	numbers: boolean;
	symbols: boolean;
	setCopied: () => void;
	setUppercases: () => void;
	setLowercases: () => void;
	setNumbers: () => void;
	setSymbols: () => void;
}

const usePasswordStore = create<PasswordState>()((set) => ({
	password: '',
	length: 11,
	setPassword: (password) =>
		set((state) => ({
			password: password,
		})),
	setLength: (length) =>
		set((state) => ({
			length: length,
		})),
}));

const usePasswordControlsStore = create<PasswordControlsState>()((set) => ({
	copied: false,
	uppercases: true,
	lowercases: true,
	numbers: true,
	symbols: true,
	setCopied: () =>
		set((state) => ({
			copied: !state.copied,
		})),
	setUppercases: () =>
		set((state) => ({
			uppercases: !state.uppercases,
		})),
	setLowercases: () =>
		set((state) => ({
			lowercases: !state.lowercases,
		})),
	setNumbers: () =>
		set((state) => ({
			numbers: !state.numbers,
		})),
	setSymbols: () =>
		set((state) => ({
			symbols: !state.symbols,
		})),
}));

export { usePasswordStore, usePasswordControlsStore };
