import * as React from 'react';
import s from "./BurgerMenu.module.scss";
import {useRouter} from 'next/router';
import {STORAGE} from 'codebase/StorageAdapter';
import {protectedRoutes, ProtectedRouters} from '../../../../../pages/_app';
import Link from 'next/link';

export const BurgerMenu = () => {

    const [active, setActive] = React.useState<boolean>(false);

    const toggleBtn = () => setActive(prev => !prev);

    const router = useRouter();

    const logout = () => {
        router.push('/')
        STORAGE.clear()
    }

    const renderExit = () => {

        if (protectedRoutes.includes(router.pathname as ProtectedRouters)) {
            return <li onClick={logout}><Link href='/'><a>Выйти</a></Link></li>
        } else {
            if (STORAGE.getToken()) {
                return (
                    <Link href='/cabinet'>
                        <a className={s.toCabinet}>Личный кабинет</a>
                    </Link>
                )
            } else return <></>
        }

    }


    if (protectedRoutes.includes(router.pathname as ProtectedRouters)) {

        return (
            <>
                <button className={`btn-reset ${s.burger} ${active ? s.active : ''}`} onClick={toggleBtn}
                        aria-label="Открыть меню"/>
                <nav className={`${s.navigation} ${active ? s.active : ''}`}>
                    <ul className={`list-reset container`}>
                        <li><a href="#sim-cards">Мои SIM-карты</a></li>
                        <li><a href="#details">Детализация</a></li>
                        <li><a href="#settings">Настройки</a></li>
                        <li><a href="#faq">Частые вопросы</a></li>
                        {renderExit()}
                    </ul>
                </nav>
            </>
        )
    } else {
        return <></>
    }
}
