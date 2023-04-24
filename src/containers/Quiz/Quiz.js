import { Component } from "react"
import classes from './Quiz.module.css';
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'Что любит Алина?',
                id: 1,
                rightAnswerId: 4,
                answers: [
                    {text: "Секс", id: 1},
                    {text: "Духи", id: 2},
                    {text: "Любовь", id: 3},
                    {text: "Мороженка", id: 4},
                ]
            },
            {
                question: 'Кем работает Алина?',
                id: 2,
                rightAnswerId: 3,
                answers: [
                    {text: "Сталелитейщик", id: 1},
                    {text: "Повар", id: 2},
                    {text: "Цветник", id: 3},
                    {text: "Программист", id: 4},
                ]
            },
            {
                question: 'За сколько тенге купила сапоги Алина?',
                id: 3,
                rightAnswerId: 1,
                answers: [
                    {text: "32000", id: 1},
                    {text: "30000", id: 2},
                    {text: "35000", id: 3},
                    {text: "31000", id: 4},
                ]
            },
            {
                question: 'Какого цвета трусики у Алины?',
                id: 4,
                rightAnswerId: 2,
                answers: [
                    {text: "Красные", id: 1},
                    {text: "Непонятные", id: 2},
                    {text: "Черные", id: 3},
                    {text: "Белые", id: 4},
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        console.log(answerId)
        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        if (question.rightAnswerId === answerId) {
            if(!results[question.id]) {
               results[question.id] = 'success'
            }
            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = window.setTimeout(() => {   
                if(this.isQuizFinished()) {
                    console.log('finished');
                    // alert('Than "Q" for your participation!')
                    this.setState({
                        isFinished: true
                    })
                    // this.setState({
                    //     activeQuestion: 0,
                    //     answerState: null
                    // })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 500)
        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    // componentDidMount() {
    //     console.log(this.props.match.params.id)
    // }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>TLP Agenda</h1>
                    {
                        this.state.isFinished 
                        ? < FinishedQuiz 
                            results={this.state.results} 
                            quiz={this.state.quiz} 
                            onRetry={this.retryHandler} 
                            />
                        : <ActiveQuiz 
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLenght={this.state.quiz.length}
                        activeQuestionTab={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz