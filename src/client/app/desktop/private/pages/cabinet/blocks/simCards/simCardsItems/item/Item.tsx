import {pencilIcon, plusIcon} from "../../../../../../../../components/icons/Icons";
import {Progress} from "../../../../../../../../components/progress/Progress";
import s from "./Item.module.scss";

export const Item = (props: { operatorIcon: any, tariffTitle: any, titleName: any, price: any, progressLeft: any, isEmpty: any }) => {
    return (
        <li className={`${s.item} ${props.isEmpty ? s.itemEmpty : ''}`}>
            {props.isEmpty ?
                <button className={`${s.addBtn} btn-reset`}>
                    {plusIcon()}
                    <p>Добавить новую <br/> SIM-карту</p>
                </button> :
                <>
                    <div className={s.left}>
                        <div className={s.logo}>
                            {props.operatorIcon}
                        </div>
                        <div className={s.tariff}>{props.tariffTitle}</div>
                        <button type={'button'} className={`${s.title} btn-reset`}>
                            <span>{props.titleName}</span>
                            {pencilIcon()}
                        </button>
                        <div className={s.about}>
                            <span className={s.price}>{props.price}<span>₽/месяц</span></span>
                            <button className={`btn-reset ${s.btn}`} type='button'>Подробнее о тарифе</button>
                        </div>
                    </div>
                    <Progress isActive={false} progressLeft={props.progressLeft}/>
                </>
            }
        </li>
    )
}

Item.defaultProps = {
    operatorIcon: '',
    progressLeft: 0,
    tariffTitle: '',
    titleName: '',
    price: '',
    isEmpty: true
}