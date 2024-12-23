function Button( {text, color,children}){
    return <button style = {{color :color }}>
        {text} - {color}
        {children}
        </button>
}

Button.defaultProps = {
    color : "blue"
}
export default Button;