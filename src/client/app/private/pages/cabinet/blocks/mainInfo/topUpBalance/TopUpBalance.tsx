import * as React from 'react';
import * as ro from 'rxjs/operators';

import { mirLogo, mastercardLogo, visaLogo } from '../../../../../../components/icons/Icons';
import { Button } from "../../../../../../components/button/Button";
import s from './TopUpBalance.module.scss';
import { Logger, waitForClose } from 'utils';
import { CONNECTION } from 'codebase/Connection';
import { CreateBalancePaymentRequest, CreateBalancePaymentResponse } from 'generated/proto.web';
import { Spinner } from 'app/components/spinner/Spinner';
import { DefaultStateComponent } from 'codebase/types';

interface TopUpBalanceStateModel extends DefaultStateComponent {
    minAmount? : string;
}

export const TopUpBalance = () => {
    
    const logger = new Logger('Top up balance');

    const closedSubject = waitForClose();

    const balanceRef = React.useRef<HTMLInputElement>();

    const [state, setState] = React.useState<TopUpBalanceStateModel>({
        error : false,
        inProgress : false,
        minAmount : '0'
    })

    React.useEffect(() => {

        CONNECTION.getMinBalancePaymentAmmount({})
        .pipe(
            ro.tap(response => {
                setState(prev => ({
                    ...prev,
                    inProgress : false,
                    minAmount : response.ammount
                }))
            }),
            ro.takeUntil(closedSubject)
        )
        .subscribe(logger.rx.subscribe('Error in receiving min abalance payment'));

    }, [state.minAmount])

    const handleBalancePayment = () => {

        if (state.minAmount <= balanceRef.current.value) {
            setState(prev => ({
                ...prev,
                error : false,
                inProgress : true,
            }))
            
            CONNECTION.createBalancePayment(createBalancePaymentRequest())
                .pipe(
                    ro.tap(parseBalancePaymentResponse),
                    ro.takeUntil(closedSubject)
                )
                .subscribe(logger.rx.subscribe('Error balance payment'))
        }
        else {
            setState(prev => ({
                ...prev,
                error : true,
                inProgress : false,
            }))
        }
    }

    const parseBalancePaymentResponse = (response : CreateBalancePaymentResponse) => {
        if (response.success) {
            setState(prev => ({
                ...prev,
                inProgress : false,
            }))

            window.open(response.success.url);

        }
        else if (response.ammountIsLessMinimal) {
            setState(prev => ({
                ...prev,
                inProgress : false,
                error : true,
            }))
        }
    }

    const createBalancePaymentRequest = () : CreateBalancePaymentRequest => ({
        amount : balanceRef.current.value || '0'
    })

    const showBuyButton = () => {
        if (state.inProgress) {
            return <Spinner />
        }
        else {
            return <Button onClick={handleBalancePayment} bgcolor='secondary' text='Оплатить'/>
        }
    }

    const showDisclaimer = () => {
        if (state.error) {
            return <p className={`${s.disclaimer} error`}>Не менее {state.minAmount} рублей</p>
        }
        else {
            return <p className={s.disclaimer}>от {state.minAmount} до 10 000 рублей</p>
        }
    }

    return (
        <div className={s.topBalance}>
            <h4 className={s.title}>Пополнить баланс</h4>
            <input ref={balanceRef} disabled={state.inProgress} className="input" min="10" max="10000" type='number' placeholder='500₽' pattern='/^\d+$/'/>
            {showDisclaimer()}
            <div className={s.controls}>
                {showBuyButton()}
                <ul className={`list-reset ${s.list}`}>
                    <li aria-label='Можно оплатить картой МИР' className={s.listItem}>
                        {mirLogo()}
                    </li>
                    <li aria-label='Можно оплатить картами Mastercard' className={s.listItem}>
                        {mastercardLogo()}
                    </li>
                    <li aria-label='Можно оплатить картой Visa' className={s.listItem}>
                        {visaLogo()}
                    </li>
                </ul>
            </div>
        </div>
    )
}
