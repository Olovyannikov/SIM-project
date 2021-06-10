import s from './LoginForm.module.scss';
import {Input} from "../../../../../../components/input/Input";
import {Button} from "../../../../../../components/button/Button";

export const LoginForm = () => {
    return (
        <section className={s.login}>
            <div className={`container ${s.wrapper}`}>
                <h2 className={s.title}>Вход в личный кабинет</h2>
                <p className={s.descr}>Укажите свой адрес электронной почты и получите на email ссылку для входа</p>
                <form>
                    <label className={s.label} htmlFor="email">
                        <span>Ваш email</span>
                        <Input type={'email'} placeholder={'alex1280@gmail.com'}/>
                    </label>
                    <p className={s.notification}>Нажимая "Активировать SIM" Вы подтверждаете свое согласие <a href="#">с условиями</a></p>
                    <div className={s.controls}>
                        <a href={'/'}>
                            <svg width="7" height="4" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.88294 0.465648L8.99526 6.58L15.1229 0.481035L17.0006 2.3634L8.99052 10.3533L1.00058 2.34328L2.88294 0.465648Z"/>
                            </svg>
                            <span>Вернуться к активации SIM</span>
                        </a>
                        <Button bgcolor={'primary'} text={'Отправить'}/>
                    </div>
                </form>
            </div>
        </section>
    )
}