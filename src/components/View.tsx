import classes from './View.module.css';

interface IProps {
    names: string;
    age: number;
}

const View = ({ names, age }: IProps) => (
    <div className={classes.view}>
        <img src={"./user.png"} className={classes.avatar} />
        <div className={classes.row} role="row">
            <h3 className={classes.name} role='name'>{names}</h3>
        </div>
        <div className={classes.row} role="row">
            <span className={classes['item-key']}>age:</span><span>{age}</span>
        </div>
    </div >
);

export default View;