import classes from './Error.module.css';

const ErrorDialog = () => {
    function handleRefreshClick() {
        location.href = "/";
    }

    return (
        <div>
            <h2 className={classes.title}>Some error has occurred</h2>
            <button role='refresh' className={classes.button} onClick={handleRefreshClick}>Refresh page</button>
        </div>
    );
};

export default ErrorDialog;
