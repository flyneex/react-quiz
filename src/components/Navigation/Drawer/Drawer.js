import { Component } from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../../components/UI/Backdrop/Backdrop'

const links = ['Тест про бархатные тяги', 'Тест номер два', 'Алина глупая']

class Drawer extends Component {
    renderLinks() {
        return links.map((links, index) => {
            return (
                <li key={index}>
                    <a>{links}</a>
                </li>
            )
        })
    }
    render() {
        const cls = [classes.Drawer]

        if(!this.props.isOpen) {
            cls.push(classes.close)
        }

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
            </>
        )
    }
}

export default Drawer