import {Button} from "../../../../../../../components/button/Button";
import s from './Disclaimer.module.scss';

export const Disclaimer = () => {
    return (
        <div className={s.disclaimer}>
            <p className={s.notification}>
                В соответствии с поправками в Федеральном законе "О связи" 126-ФЗ, для активации Вашей SIM-карты
                Вам необходимо предоставить свои данные оператору.
                Пожалуйста, предоставьте данные через портал Госуслуг (необходим подтвержденный профиль на
                Госуслугах).
            </p>
            <Button bgcolor='primary' text='Предоставить данные через госуслуги'/>
        </div>
    )
}