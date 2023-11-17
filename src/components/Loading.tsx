import LANGUGAES from '../lib/language.const';
import { LanguageType } from '../types/LanguageType';
import classes from './Loading.module.css';

/**
 * A dialog to show a details which let user to know about the request is not finished yet.
 */
const Loading = ({ language = "en" }: { language?: LanguageType }) => (
    <div className={classes.root}>
        <h2 className={classes.title}>
            {LANGUGAES.dataIsLoading[language]}
        </h2>
        <div className={classes['lds-ellipsis']}><div></div><div></div><div></div><div></div></div>
    </div>

);

export default Loading;