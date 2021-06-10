import s from './Header.module.scss';

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={`container ${s.wrapper}`}>
                <div className={s.left}>
                    <span>SIMbox</span>
                </div>
            </div>
        </header >
    )
}