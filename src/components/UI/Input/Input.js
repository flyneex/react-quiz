import classes from './Input.module.css'


const Input = props => {
    const inputType = props.type || 'text'
    const cls = [classes.Input]
    const htmlFor = `${inputType}-${Math.Random}`
    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input type={inputType} id={htmlFor} value={props.value} onChange={props.onChange} />
        </div>
    )
}

export default Input