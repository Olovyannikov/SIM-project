import s from './User.module.scss';

export const User = () => {
    return (
        <div className={s.user}>
            <h3 className={s.title}>Ваши данные

                {/* Иконка "Подтвержденные данные"
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3834 8.27344H15.2841C15.0451 8.27344 14.8177 8.38828 14.6771 8.58516L10.9927 13.6945L9.32398 11.3789C9.18335 11.1844 8.95835 11.0672 8.71695 11.0672H7.61773C7.46538 11.0672 7.37632 11.2406 7.46538 11.3648L10.3857 15.4148C10.4547 15.5111 10.5456 15.5896 10.651 15.6437C10.7564 15.6978 10.8731 15.7261 10.9916 15.7261C11.11 15.7261 11.2268 15.6978 11.3321 15.6437C11.4375 15.5896 11.5284 15.5111 11.5974 15.4148L16.5334 8.57109C16.6248 8.44688 16.5357 8.27344 16.3834 8.27344Z" fill="#28D2D6"/>
                    <path d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z" fill="#28D2D6"/>
                {</svg>*/}

            </h3>
            <span className={s.subtitle}
                  aria-label='Номер телефона абонента'>+7 (000) 000-00-00</span>
            <small className={s.email}>
                <a href='mailto:alexivanov@mail.ru'>alexivanov@mail.ru</a>
            </small>
            <button className={`${s.button} btn-reset`}>Изменить</button>
        </div>
    )
}