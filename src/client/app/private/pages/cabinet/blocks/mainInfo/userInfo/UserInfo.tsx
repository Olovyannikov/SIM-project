import s from './UserInfo.module.scss';


export const UserInfo = () => {
    return (
        <div className={s.user}>
            <h3 className={s.title}>Ваши данные</h3>
            <span className={s.subtitle} aria-label='Номер телефона абонента'>+7 (000) 000-00-00</span>
            <small className={s.email}>
                alexivanov@mail.ru
            </small>
            <button className={`${s.button} btn-reset`}>Изменить</button>
        </div>
    )
}
