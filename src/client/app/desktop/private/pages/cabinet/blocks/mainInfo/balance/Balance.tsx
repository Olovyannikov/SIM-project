import s from './Balance.module.scss';

export const Balance = () => {
    return (
        <div className={s.balance}>
            <h3 className={s.title}>Баланс на сегодня
                <time className={s.time}>10:11</time>
            </h3>
            <span className={s.subtitle} aria-label='Баланс абонента'>600₽</span>
            <small className={s.paymentNotification}>
                Ближайшее списание - не определено
            </small>
        </div>
    )
}