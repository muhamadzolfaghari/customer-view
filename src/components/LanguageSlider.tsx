import { ChangeEvent } from 'react';
import classes from './LanguageSlider.module.css';
import { LanguageType } from '../types/LanguageType';

/**
 * a switcher to change between English or Germany language.
 * @param IProps
 * @returns React.Element
 */
const LanguageSlider = ({ onChange, language }: { language: LanguageType, onChange: (value: LanguageType) => void; }) => {
	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		const language = !event.target.checked ? "en" : "de";
		onChange(language);
		localStorage.setItem("language", language)
	}

	return (
		<div className={classes.root}>
			<span>EN</span>
			<div className={classes["toggle-checkbox-wrapper"]}>
				<input className={classes["toggle-checkbox"]} type="checkbox" id="toggle" onChange={handleChange} checked={language === "de"} />
				<label className={classes["slider"]} htmlFor="toggle">
					<span className={classes["toggle-switch opt1"]}></span>
					<span className={classes["toggle-switch opt2"]}></span>
				</label>
			</div>
			<span>DE</span>
		</div>
	);
}

export default LanguageSlider;