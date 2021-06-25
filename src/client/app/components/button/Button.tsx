interface ButtonModel {
    bgcolor: string,
    text: string
    onClick? : Function
}

export const Button = (props : ButtonModel) => {

    let background = 'btn btn-reset';

    if (props.bgcolor === 'primary') {
        background += ' btn--primary';
    } else if (props.bgcolor === 'secondary') {
        background += ' btn--secondary';
    }

    return (
        <button onClick={props.onClick ? () => props.onClick() : null} className={background}>
            {props.text}
        </button>
    )
}
