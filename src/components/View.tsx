import classes from './View.module.css';

interface IProps {
    names: string;
    age: number;
}

const View = ({ names, age }: IProps) => (
    <div className={classes.stack}>
        <div>
            {names}
        </div>
        <div>
            {age}
        </div>
    </div>
);

export default View;