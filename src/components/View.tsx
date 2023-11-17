import classes from './View.module.css';

interface IProps {
    names: string;
    age: number;
}

const View = ({ names, age }: IProps) => (
    <div className={classes.view}>
        <img src={"./user.png"} className={classes.avatar} />
        <div className={classes['view-row']} role="row">
            <span>name:</span><span>{names}</span>
        </div>
        <div className={classes['view-row']} role="row">
            <span>age:</span><span>{age}</span>
        </div>
    </div >
);

export default View;