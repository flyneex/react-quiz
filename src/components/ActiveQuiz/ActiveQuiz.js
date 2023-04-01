import classes from './ActiveQuiz.module.css';
import AnswerList from './AnswerList/AnswerList';

const Active = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <strong>{props.activeQuestionTab}.&nbsp;{props.question}</strong>
            <span>{props.activeQuestionTab} из {props.quizLenght}</span>
        </p>
            <AnswerList
                state={props.state}
                answers={props.answers}
                onAnswerClick={props.onAnswerClick}
            />
    </div>
)

export default Active