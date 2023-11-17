import LANGUGAES from '../lib/language.const';
import { LanguageType } from '../types/LanguageType';
import classes from './Error.module.css';

/**
 * Error handling through showing a related message and a button to able user to refresh the page.
 */
const ErrorDialog = ({ language = "en" }: { language?: LanguageType }) => {
    function handleRefreshClick() {
        location.href = "/";
    }

    return (
        <div className={classes.root}>
            <h2 className={classes.title}>{LANGUGAES.someErrorOccurred[language]}</h2>
            <button role='refresh' className={classes.button} onClick={handleRefreshClick}>{LANGUGAES.refreshPage[language]}</button>
        </div>
    );
};

export default ErrorDialog;
