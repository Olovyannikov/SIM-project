import * as React from 'react';
import * as ro from 'rxjs/operators';
import * as rx from 'rxjs';

import {useRouter} from 'next/router';
import s from './LoginForm.module.scss'
import {Button} from "../../../../../components/button/Button";
import {backToArrow} from 'app/components/icons/Icons';
import Link from 'next/link'
import {convertEndingOfNoun, Logger, waitForClose} from 'utils';
import {CONNECTION} from 'codebase/Connection';
import {LoginRequest, LoginResponse} from 'generated/proto.web';
import {STORAGE} from 'codebase/StorageAdapter';
import {Spinner} from 'app/components/spinner/Spinner';

export const LoginForm = () => {

    const logger = new Logger('Loggin form');

    const closedSubject = waitForClose();

    const router = useRouter();

    const [inProgress, setInProgress] = React.useState<boolean>(false);
    const [error, setError] = React.useState<string>(null);

    const emailInput = React.useRef<HTMLInputElement>();
    const passwordInput = React.useRef<HTMLInputElement>();

    const handleLogin = () => {
        setInProgress(prev => prev = true);

        setError(null)
        if (checkValidEmail()) {
            CONNECTION.login(createLoginRequest())
                .pipe(
                    ro.tap(parseLoginResponse),
                    ro.takeUntil(closedSubject)
                )
                .subscribe(logger.rx.subscribe("Error logging in"))
        } else {
            setError(prev => prev = 'Введите корректную почту')
            setInProgress(prev => prev = false)
        }
    }

    const createLoginRequest = (): LoginRequest => ({
        email: emailInput.current.value,
        password: passwordInput.current.value
    })

    const parseLoginResponse = (response: LoginResponse) => {

        if (response.invalidEmailOrPassword) {
            handleInvalidEmailOrPasswordResponse()
        } else if (response.tooManyErrorAttempts) {
            handleToManyErrorAttemptsResponse(response)
        } else if (response.success) {
            handleSuccessResponse(response)
        }
    }

    const handleInvalidEmailOrPasswordResponse = () => {
        setError('Неправильная почта или пароль')
        setInProgress(prev => prev = false)
    }

    const handleToManyErrorAttemptsResponse = (response: LoginResponse) => {
        let secondsToWait = Math.round(parseInt(response.tooManyErrorAttempts) / 1000)

        rx.interval(1000)
            .pipe(
                ro.map(r => secondsToWait - r),
                ro.tap(secondsToWait => {

                    if (secondsToWait > 0) {
                        setError(prev => prev = `Повторить можно через ${secondsToWait} ${convertEndingOfNoun(secondsToWait)}`);
                    } else {
                        setInProgress(prev => prev = false)
                        setError(null)
                    }
                }),
                ro.takeWhile(secondsToWait => secondsToWait > 0),
                ro.takeUntil(closedSubject)
            )
            .subscribe(logger.rx.subscribe("Error logging in"))
    }

    const handleSuccessResponse = (response: LoginResponse) => {
        STORAGE.setToken(response.success.token);
        router.push('/cabinet');
    }

    const handleEventEnter = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (document.activeElement === emailInput.current) {
                passwordInput.current.focus()
            } else if (document.activeElement === passwordInput.current) {
                handleLogin()
            }
        }
    }

    const checkValidEmail = () => {
        const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,9}$/;
        if (regExpEmail.test(emailInput.current.value)) {
            return true
        }
    }

    const showInProgress = () => {
        if (inProgress) {
            return <Spinner/>
        } else {

            return (
                <>
                    <Button onClick={handleLogin} bgcolor={'primary'} text='Войти'/>
                    {/* <div onClick={handleRestorePasswordClick} className="forgot-password">Восстановить пароль</div> */}
                    <Link href='/'>
                        <a>{backToArrow()}<span>Вернуться к активации SIM</span></a>
                    </Link>
                </>
            )
        }
    }

    const showError = () =>
        {
            if (error) {
                return <p className="error">{error}</p>
            }
        }

    return (
        <section className={s.login}>
            <div onKeyDown={handleEventEnter} className={`container ${s.wrapper}`}>
                <h2 className={s.title}>Вход в личный кабинет</h2>
                <p className={s.descr}>Укажите свой адрес электронной почты и получите на email ссылку для входа</p>
                <div>
                    <label className={s.label}>
                        <span>Ваш email</span>
                        <input ref={emailInput} disabled={inProgress} className='input' type='email'
                               placeholder='alex1280@gmail.com'/>
                    </label>
                    <label className={s.label}>
                        <span>Ваш пароль к личному кабинету</span>
                        <input ref={passwordInput} disabled={inProgress} className='input' type='password'
                               placeholder=''/>
                        <button className={`btn btn-reset ${s.restoreButton}`}>Не помню</button>
                    </label>
                    <div className={s.controls}>
                        {showError()}
                        {showInProgress()}
                    </div>
                </div>
            </div>
        </section>
    )
    }
