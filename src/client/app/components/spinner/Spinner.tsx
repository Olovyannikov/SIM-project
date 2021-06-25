import s from './Spinner.module.scss';

export const Spinner = () => {

    return (
        <div className={s.Spinner}>
            <div className={s.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
