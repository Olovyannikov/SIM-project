import {Input} from "../../../../../../../../components/input/Input";
import s from './../Form.module.scss';

export const FormLabel = (props: {id: any, title: any, type: any, placeholder: any}) => {
    return (
        <label htmlFor={props.id} className={s.label}>
            <span className={s.title}>{props.title}</span>
            <Input type={props.type} placeholder={props.placeholder}/>
        </label>
    )
}