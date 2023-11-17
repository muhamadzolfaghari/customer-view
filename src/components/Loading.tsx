import classes from './Loading.module.css';

const Loading = () => (
    <div className={classes.root}>
        <h2 className={classes.title}>Data is loading...</h2>
        <div className={classes['lds-ellipsis']}><div></div><div></div><div></div><div></div></div>
    </div>

);

export default Loading;