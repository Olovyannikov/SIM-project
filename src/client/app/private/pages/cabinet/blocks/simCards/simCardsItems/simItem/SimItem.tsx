import { pencilIcon, megafonIcon }  from "../../../../../../../components/icons/Icons";
import { Progress } from "../../../../../../../components/progress/Progress";
import s from "./SimItem.module.scss";

export const SimItem = () => {
    return (
        <li className={`${s.item}`}>
            <div className={s.left}>
                <div className={s.logo}>
                    { megafonIcon() }
                </div>
            <div className={s.tariff}>Безлимитный интернет</div>
            <button type={'button'} className={`${s.title} btn-reset`}>
                <span>Новая SIM-карта</span>
                { pencilIcon() }
            </button>
            <div className={s.about}>
                <span className={s.price}>590<span>₽/месяц</span></span>
                <button className={`btn-reset ${s.btn}`} type='button'>Подробнее о тарифе</button>
            </div>
            </div>
            <Progress isActive={false} progressLeft={8}/>
        </li>
    )
}
