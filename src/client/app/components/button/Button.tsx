export const Button = (props: any) => {
    return (
        <button className={props.bgcolor == 'primary' ? 'btn-reset btn btn--primary' : props.bgcolor == 'secondary' ? 'btn btn-reset btn--secondary' : 'btn-reset btn'}>
            {props.text}
        </button>
    )
}