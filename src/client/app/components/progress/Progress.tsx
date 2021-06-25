import * as React from 'react';

import { Button } from "../button/Button";

export const Progress = (props: {isActive: boolean, progressLeft: number, }) => {
    const daysProgress = Math.floor(100 / 31 * props.progressLeft);

    const renderIsActiveProgress = () => {
        if (props.isActive) {
            return <p className="progress__error">Не активирована</p>
        }
        else {
            return <Button bgcolor='secondary' text='Деактевировать'/>
        }
    }

    return (
        <div className="progress">
            <span className="progress__period">Остаток оплаченного <br/> периода </span>
            <div className="progress__wrapper">
                <div className={`progress__circle ${'progress--' + daysProgress}`}><></>
                </div>
                <div className="progress__count">
                    <span>{props.progressLeft}</span>
                    <span>
                        {/* todo - переделать  */}
                        {props.progressLeft == 1 || props.progressLeft == 21 || props.progressLeft ==31 ? 'день' :
                            props.progressLeft > 1 && props.progressLeft < 5 ? 'дня' : 'дней'}
                    </span>
                </div>
            </div>
            {renderIsActiveProgress()}
        </div>
    )
}

