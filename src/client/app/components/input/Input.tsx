export const Input = (props: {type: any, placeholder: any}) => {

    let numberType = {
        'max': '10000',
        'min': '10'
    }

    function handleChange(e: any) {
        e.target.value < 10 ?
            e.target.classList.add('error') :
            e.target.classList.remove('error')
    }

    return (
        <input
            className='input'
            type={props.type}
            placeholder={props.placeholder}
            {...props.type === 'number' ? {...numberType} : ''
            }
            onInput={handleChange}
        />
    )
}