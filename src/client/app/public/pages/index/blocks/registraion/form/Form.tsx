import * as React from 'react';
import * as rx from "rxjs"
import * as ro from "rxjs/operators"

import { Button } from "app/components/button/Button"
import Link from 'next/link';
import s from './Form.module.scss'
import { Logger, waitForClose, convertEndingOfNoun } from "utils";
import { CONNECTION } from 'codebase/Connection';
import { RegisterWebRequest, RegisterWebResponse } from 'generated/proto.web';
import { Spinner } from 'app/components/spinner/Spinner';


export const Form = () => {

    const logger = new Logger ('Registration Dialog');

    const closedSubject = waitForClose ();

    const [successRegister, setSuccessRegister] = React.useState<boolean>(null)
    const [error, setError] = React.useState<string>('');
    const [inProgress, setInProgress] = React.useState<boolean>(false);

    const emailInput = React.useRef<HTMLInputElement>();
    const passwordInput = React.useRef<HTMLInputElement>();
    const passwordRepeatInput = React.useRef<HTMLInputElement>();

    const showError = () => {
        if (error) {
            return <p className="error">{error}</p>
        }
    }

    const handleRegister = () => {
        setInProgress(prev => prev = true)

        setError(null)
        setSuccessRegister(null)

        if (checkEqualsPassword ()) {

            CONNECTION.registerWeb(createRegisterRequest())
                .pipe (
                    ro.tap(parseRegisterResponse),
                    ro.takeUntil(closedSubject)
                )
                .subscribe(logger.rx.subscribe('Error regist in'))
        }

    }

    const parseRegisterResponse = (response : RegisterWebResponse) => {

        if (response.emailAlreadyUsed) {
            handlePlainError('Аккаунт уже используется')
        }
        else if (response.invalidEmail) {
            handlePlainError('Неправильная почта')
        }
        else if (response.invalidPassword) {
            handleInvalidPasswordResponse();
        }
        else if (response.tooManyAttempts) {
            handleToManyErrorAttemptsResponse(response)
        }
        else if (response.expired) {
            handleRegister ()
        }
        else if (response.success) {
            handleSuccessResponse()
        }
    }

    const handleSuccessResponse = () => {
        setInProgress(prev => prev = false);
        setSuccessRegister(prev => prev = true)
    }

    const handleInvalidPasswordResponse = () => {
        if (passwordInput.current.value.length < 6 || passwordRepeatInput.current.value.length < 6) {
            handlePlainError('Пароль меньше шести символов');
        }
        else {
            setInProgress(prev => prev = false)
        }
    }

    const handleToManyErrorAttemptsResponse = (response : RegisterWebResponse) => {
        let secondsToWait = Math.round (parseInt (response.tooManyAttempts) / 1000)

        rx.interval (1000)
            .pipe (
                ro.map (r => secondsToWait - r),
                ro.tap (secondsToWait => {

                    if (secondsToWait > 0) {
                        setError(prev => prev = `Повторить можно через ${secondsToWait} ${convertEndingOfNoun(secondsToWait)}`);
                    }
                    else {
                        setInProgress(prev => prev = false)
                        setError(null)
                    }
                }),
                ro.takeWhile (secondsToWait => secondsToWait > 0),
                ro.takeUntil (closedSubject)
            )
            .subscribe (logger.rx.subscribe ("Error logging in"))
    }

    const checkEqualsPassword = () => {
        if (!passwordInput.current.value || !passwordRepeatInput.current.value) {
            handlePlainError('Заполните все поля')
            return false;
        }
        else if (passwordInput.current.value === passwordRepeatInput.current.value) {
            return true;
        }
        else {
            handlePlainError('Пароли не совпадают!')
            return false
        }
    }

    const handlePlainError = (error : string) => {
        setError(prev => prev = error);
        setInProgress(prev => prev = false);
    }

    const handleEventEnter = (e : React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (document.activeElement === emailInput.current) {
                passwordInput.current.focus();
            }
            else if (document.activeElement === passwordInput.current) {
                passwordRepeatInput.current.focus();
            }
            else if (document.activeElement === passwordRepeatInput.current) {
                handleRegister()
            }
        }
    }

    const showInProgress = () => {
        if (inProgress) {
            return <Spinner />
        }
        else {
            return (
                <>
                    <Button onClick={handleRegister} bgcolor='primary' text="Перейти к активации"/>
                    <Link href='/login'>
                        <a><Button bgcolor='' text="У меня уже есть аккаунт"/></a>
                    </Link>
                </>
            )
        }
    }

    const showSuccessRegister = () => {

        if (successRegister) {
            return (
                <div className={`${s.controlsColumn} ${s.controls}`}>
                    <div className={s.verifySuccess}>Вам на почту отправлено письмо для подтверждения регистрации</div>
                    <Button onClick={handleRegister} text={'Отправить еще раз'} bgcolor={'primary'}/>
                </div>
            )
        }
        else {
            return showInProgress();
        }
    }

    const createRegisterRequest = () : RegisterWebRequest => ({
        email : emailInput.current.value,
        password : passwordInput.current.value,
    })

    return (
        <div onKeyUp={handleEventEnter} className={s.form}>
            <label className={s.label}>
                <span className={s.title}>Укажите Ваш email для создания нового аккаунта</span>
                <input disabled={inProgress} ref={emailInput} className="input" type='text' placeholder='alex1280@gmail.com'/>
            </label>
            <label className={s.label}>
                <span className={s.title}>Придумайте пароль</span>
                <input disabled={inProgress} ref={passwordInput} className="input" type='password' />
            </label>
            <label className={s.label}>
                <span className={s.title}>Повторите пароль</span>
                <input disabled={inProgress} ref={passwordRepeatInput} className="input" type='password' />
            </label>
            <p className={s.agree}>
                Нажимая "Активировать SIM" Вы подтверждаете свое согласие <Link href='/'><a>с условиями</a></Link>
            </p>
            {showError()}
            <div className={`${s.controls} `}>
                {showSuccessRegister()}
            </div>
        </div>
    )
}
