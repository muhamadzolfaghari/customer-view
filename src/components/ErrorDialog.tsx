import classes from './Error.module.css';

const ErrorDialog = () => {
    function handleRefreshClick() {
        location.href = "/";
    }

    return (
        <div className={classes.root}>
            <h2 className={classes.title}>Some error is occurred</h2>
            <button className={classes.button} onClick={handleRefreshClick}>Refresh page</button>
        </div>
    );
};

export default ErrorDialog;
