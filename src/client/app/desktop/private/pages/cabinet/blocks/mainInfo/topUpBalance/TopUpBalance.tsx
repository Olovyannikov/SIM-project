import {mirLogo, mastercardLogo, visaLogo} from '../../../../../../../components/icons/Icons';
import {Button} from "../../../../../../../components/button/Button";
import {Input} from "../../../../../../../components/input/Input";
import s from './TopUpBalance.module.scss';

export const TopUpBalance = () => {
    return (
        <div className={s.topBalance}>
            <h4 className={s.title}>Пополнить баланс</h4>
            <Input type={'number'}  placeholder={'500₽'}/>
            <span className={s.disclaimer}>от 10 до 10 000 рублей</span>
            <div className={s.controls}>
                <Button bgcolor='secondary' text='Оплатить'/>
                <ul className={`list-reset ${s.list}`}>
                    <li aria-label={'Можно оплатить картой МИР'} className={s.listItem}>
                        {mirLogo()}
                    </li>
                    <li aria-label={'Можно оплатить картами Mastercard'} className={s.listItem}>
                        {mastercardLogo()}
                    </li>
                    <li aria-label={'Можно оплатить картой Visa'} className={s.listItem}>
                        {visaLogo()}
                    </li>
                </ul>
            </div>
        </div>
    )
}