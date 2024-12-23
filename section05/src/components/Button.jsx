function Button({text, color,children}){
    // e는 이벤트 객체를 의미합니다. 이벤트 객체는 이벤트가 발생했을 때 이벤트에 대한 정보를 가지고 있습니다.
    const onClickButton = (e) => { 
        console.log(e);
        console.log(text);
    };

    return(
         <button 
            onClick = {onClickButton}
            style = {{color :color }}
            >
            {text} - {color}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color : "blue"
}
export default Button;