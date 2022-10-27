import classes from "./AnswerItem.module.css"

const ActiveItem = props => {
    return (
        <li className={classes.AnswerItem}>
            {props.answer.text}
        </li>
    )
}

export default ActiveItem