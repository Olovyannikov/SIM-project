import * as React from 'react';

import s from './Header.module.scss';
import { BurgerMenu } from "./burgerMenu/BurgerMenu";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { protectedRoutes, ProtectedRouters } from '../../../../pages/_app';
import { STORAGE } from 'codebase/StorageAdapter'; 

export const Header = () => {

    const router = useRouter();

    const logout = () => {
        router.push('/');
        STORAGE.clear();
    }
    
    const renderToCabinet = () => {

        const token = STORAGE.getToken();

        if (token) {
            return (
                <Link href='/cabinet'>
                    <a className={s.toCabinet}>Личный кабинет</a>
                </Link>
            )
        }
        else return <></>
    }

    const renderCurrentHeader = () => {
        if (protectedRoutes.includes(router.pathname as ProtectedRouters)) {
            return (
                <>
                    <div className={s.left}>
                        <Link href='/'>
                            <a><span>SIMbox</span></a>
                        </Link>   
                    </div>
                    <span className={s.logout} onClick={logout}>Выйти</span>
                </>
            )
        }
        else {
            return (
                <>
                    <div className={s.left}>
                        <span>SIMbox</span> 
                    </div>
                    {renderToCabinet()}
                </>
            )
        }
    }

    return (
        <header className={s.header}>
            <div className={`container ${s.wrapper}`}>
                {renderCurrentHeader()}
                <BurgerMenu />
            </div>
        </header >
    )
}
