import {Button} from "../button/Button";

export const Progress = (props: {isActive: boolean, progressLeft: any, }) => {
    const daysProgress = Math.floor(100 / 31 * props.progressLeft);

    return (
        <div className="progress">
            <span className="progress__period">Остаток оплаченного <br/> периода </span>
            <div className="progress__wrapper">
                <div className={`progress__circle ${'progress--' + daysProgress}`}><></>
                </div>
                <div className="progress__count">
                    <span>{props.progressLeft}</span>
                    <span>
                        {props.progressLeft == 1 || props.progressLeft == 21 || props.progressLeft ==31 ? 'день' :
                            props.progressLeft > 1 && props.progressLeft < 5 ? 'дня' : 'дней'}
                    </span>
                </div>
            </div>
            {!props.isActive ?
                <p className="progress__error">Не активирована</p> :
                <Button bgcolor='secondary' text='Деактевировать'/>
            }
        </div>
    )
}

Progress.defaultProps = {
    isActive: false,
    progressLeft: 0
}