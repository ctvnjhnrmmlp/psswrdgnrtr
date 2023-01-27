import { Slider } from 'theme-ui';
import { usePasswordStore } from '../contexts/password';
import { forwardRef, Ref } from 'react';

type PasswordSliderProps = {
	handleOperation: () => void;
	length: number;
};

const PasswordSlider = forwardRef(
	(props: PasswordSliderProps, ref: Ref<HTMLInputElement>) => {
		const { length, handleOperation } = props;

		return (
			<Slider
				defaultValue={length}
				min={4}
				max={100}
				step={1}
				ref={ref}
				onInput={handleOperation}
			/>
		);
	}
);

PasswordSlider.displayName = 'PasswordSlider';

export default PasswordSlider;
