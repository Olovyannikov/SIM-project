import {Button} from "../../../../../../../components/button/Button"
import {FormLabel} from "./formLabel/formLabel";
import s from './Form.module.scss'

export const Form = () => {
    return (
        <form className={s.form}>
            <FormLabel
                title={'SIM ID'}
                id={'sim-id'}
                type={'text'}
                placeholder={'Пример того, как выглядит SIM ID'}/>
            <FormLabel
                title={'SIM password'}
                id={'sim-pass'}
                type={'password'}
                placeholder={'Пример того, как '}/>
            <FormLabel
                title={'Ваш email'}
                id={'sim-email'}
                type={'email'}
                placeholder={'alex1280@gmail.com'}/>
            <p className={s.agree}>
                Нажимая "Активировать SIM" Вы подтверждаете свое согласие <a href='#'>с условиями</a>
            </p>
            <div className={s.controls}>
                <Button bgcolor='primary' text="Активировать SIM"/>
                <Button bgcolor='' text="У меня уже есть аккаунт"/>
            </div>
        </form>
    )
}