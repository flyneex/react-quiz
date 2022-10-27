import classes from './ActiveQuiz.module.css';
import AnswerList from './AnswerList/AnswerList';

const Active = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <strong>2.&nbsp;Как дела?</strong>
            <span>4 из 12</span>
        </p>
            <AnswerList
                answers={props.answers}
            />
    </div>
)

export default Active