import * as React from 'react';
import * as ro from 'rxjs/operators';

import s from "./PasswordForm.module.scss";
import { Button } from "../../../../../../../components/button/Button";
import { Logger, nothingToNull, waitForClose } from 'utils';
import { CONNECTION } from 'codebase/Connection';
import { ChangePasswordRequest } from 'generated/proto.web';
import { Spinner } from 'app/components/spinner/Spinner';

export const PasswordForm = () => {

    const logger = new Logger('Password Form');

    const closedSubject = waitForClose();

    const passwordRef = React.useRef<HTMLInputElement>();
    const newPasswordRef = React.useRef<HTMLInputElement>();

    const [status, setStatus] = React.useState<string>(null);
    const [inProgress, setInProgress] = React.useState<boolean>(false);

    const checkPasswords = () => {

        if (nothingToNull(passwordRef.current.value) && nothingToNull(newPasswordRef.current.value)) {

            if (passwordRef.current.value === newPasswordRef.current.value) {
                return true
            }
            else {
                setStatus(prev => prev = 'Пароли не совпадают!')
            }
        }
        else {
            setStatus(prev => prev = 'Заполните все поля!')
        }
    }

    const handleChangePassword = () => {

        if(checkPasswords()) {

            setInProgress(prev => prev = true)

            CONNECTION.changePassword(createPasswordChangeRequest())
                .pipe (
                    ro.tap(response => {
                        if (response.success) {
                            handleSuccessResponse()
                        }
                    }),
                    ro.delay(2000),
                    ro.tap(() => setStatus(prev => prev = null)),
                    ro.takeUntil(closedSubject)
                )
                .subscribe(logger.rx.subscribe('Error in Entry Setting'))
        }

    }

    const handleSuccessResponse = () => {
        setStatus(prev => prev = 'Пароль успешно изменен!')
        setInProgress(prev => prev = false)
    }

    const createPasswordChangeRequest = () : ChangePasswordRequest => ({ password : passwordRef.current.value })

    const renderButton = () => {
        if (inProgress) {
            return <Spinner />
        }
        else return <Button onClick={handleChangePassword} bgcolor={'primary'} text={'Изменить'} />
    }

    return (
        <div className={`${s.form} ${s.passwordForm}`}>
            <h3 className={s.title}>Пароль</h3>
            <input disabled={inProgress} ref={passwordRef} className="input" type='password' placeholder='Новый пароль'/>
            <input disabled={inProgress} ref={newPasswordRef} className="input" type='password' placeholder='Подтвердите новый пароль'/>
            <span className={s.descr}>Минимум 6 символов</span>
            {renderButton()}
            <p className='error'>{status}</p>
        </div>
    )
}
