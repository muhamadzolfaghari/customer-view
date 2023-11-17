import LANGUGAES from '../lib/language.const';
import { LanguageType } from '../types/LanguageType';
import classes from './View.module.css';

interface IProps {
  names: string;
  age: number;
  language?: LanguageType
}

const View = ({ names, age, language = "en" }: IProps) => (
  <div className={classes.view}>
    <div className={classes.row} role="row">
      <h2 className={classes.name} role='name'>{names}</h2>
    </div>
    <div className={classes.row} role="row">
      <span className={classes['item-key']}>{LANGUGAES.age[language]}:</span>
      <span className={classes.age}>{age}</span>
    </div>
  </div>
);

export default View;