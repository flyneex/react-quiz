import { Component } from "react"
import classes from './QuizList.module.css'
import { NavLink } from "react-router-dom"

export default class QuizList extends Component {

    renderQuizes() {
        return ['Тест борода', 'Тест верховая езда', 'Тест мохнатая пизда'].map((quiz, index) => {
            return (
                <li key={index}>
                    <NavLink to={'/quiz/' + quiz}>
                        {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>
                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        )
    }
}