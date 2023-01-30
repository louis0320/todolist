function Input(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" required={true} value={props.input} onChange={props.handleChange} placeholder="오늘의 계획 입력"/>
            <input type="submit" value="✔" />
        </form>
    )
}

export default Input;