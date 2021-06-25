import s from "./EmailForm.module.scss";
import { Button } from "../../../../../../../components/button/Button";

export const EmailForm = () => {
    return (
        <div className={`${s.form} ${s.emailForm}`}>
            <h3 className={s.title}>Ваш адрес электронной почты</h3>
            <input className="input" type={'email'} placeholder={'alexivanov@mail.ru'}/>
            <Button bgcolor={'primary'} text={'Изменить'} />
        </div>
    )
}
