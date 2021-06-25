import * as React from 'react';
import * as ro from 'rxjs/operators';
import * as rx from 'rxjs';

import { CONNECTION } from 'codebase/Connection';
import { WebSocketAdapter } from 'codebase/WebSocketAdapter';
import { ListenBalanceResponse } from 'generated/proto.web';
import { waitForClose, Logger } from 'utils';

import s from './Balance.module.scss';

export const Balance = () => {

    const logger = new Logger('Balance');

    const closedSubject = waitForClose();

    const [balance, setBalance] = React.useState<string>('0');

    const balanceConventer = (balance : string) : string => {
        return Number(balance).toFixed(2)
    }

    React.useEffect(() => {

        const ws = new WebSocketAdapter<any, ListenBalanceResponse>(CONNECTION.listenBalance())

        const sub = rx.merge (
            ws.connect ()
                .pipe (ro.ignoreElements ()),
            ws.getErrorObservable (),
            ws.getCloseObservable ()
                .pipe (ro.mergeMap (() => rx.throwError (() => "Closed"))),
            ws.getResponseObservable ()
        )
        .pipe (
            ro.mergeMap (CONNECTION.checkStreamResponse),
            ro.tap (response => setBalance (prev => prev = balanceConventer(response.success.balance))),
            ro.takeUntil (closedSubject),
            ro.finalize (() => ws.close ()),
            ro.retryWhen (logger.rx.retry ("Reconnecting"))
        )
        .subscribe (logger.rx.subscribe ("Listen balance"))

    }, [])

    const times = () => {

        const nowDate = new Date();
        const hours = nowDate.getHours();

        if (nowDate.getMinutes() < 10) {
            return `${hours}:0${nowDate.getMinutes()}`
        }
        
        return `${hours}:${nowDate.getMinutes()}`;
    }


    return (
        <div className={s.balance}>
            <h3 className={s.title}>Баланс на сегодня
                <span className={s.time}>{times()}</span>
            </h3>
            <span className={s.subtitle} aria-label='Баланс абонента'> {balance} ₽</span>
            <small className={s.paymentNotification}>
                Ближайшее списание - не определено
            </small>
        </div>
    )
}
