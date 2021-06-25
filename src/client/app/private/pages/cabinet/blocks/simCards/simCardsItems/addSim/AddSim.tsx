import * as React from 'react';

import s from "./AddSim.module.scss";
import {Button} from 'app/components/button/Button';
import {Spinner} from 'app/components/spinner/Spinner';
import {plusIcon} from "../../../../../../../components/icons/Icons";
import {DefaultStateComponent} from 'codebase/types';

interface AddSimStateModel extends DefaultStateComponent {
    simForm?: boolean;
    success?: boolean;
}

export const AddSim = () => {

    const [state, setState] = React.useState<AddSimStateModel>({});

    const orderSim = () => {
        setState(prev => ({
            ...prev,
            inProgress: true
        }))
        setTimeout(() => {
            setState(prev => ({
                ...prev,
                inProgress: false,
                simForm: false
            }))
        }, 1000)
    }

    const toggleAddSim = () => setState(prev => ({
        ...prev,
        simForm: !prev.simForm,
    }))

    const renderAddSimForm = () => {
        if (state.success) {
            return <></>
        } else if (state.simForm) {
            return (
                <li className={`${s.item} ${s.addSim}`}>
                    <div className={s.addSimForm}>
                        <h3 className={s.title}>SIM ID</h3>
                        <input disabled={state.inProgress} className="input" type='number'
                               placeholder='Пример того, как выглядит SIMID' pattern='/^\d+$/'/>
                        <h3 className={s.title}>SIM password </h3>
                        <input disabled={state.inProgress} className="input" type='number'
                               placeholder='Пример того, как выглядит SIM Password' pattern='/^\d+$/'/>
                    </div>
                    {renderInProgress()}
                </li>
            )
        } else {
            return (
                <li className={s.item}>
                    <button onClick={toggleAddSim} className={`${s.addBtn} btn-reset`}>
                        {plusIcon()}
                        <p>Добавить новую <br/> SIM-карту</p>
                    </button>
                </li>
            )
        }
    }

    const renderInProgress = () => {
        if (state.inProgress) {
            return <Spinner/>
        } else {
            return (
                <div className={s.addSimControls}>
                    <Button onClick={toggleAddSim} bgcolor='' text='Отменить'/>
                    <Button onClick={orderSim} bgcolor='primary' text='Добавить'/>
                </div>
            )

        }
    }

    return (
        <>
            {renderAddSimForm()}
        </>
    )
}
