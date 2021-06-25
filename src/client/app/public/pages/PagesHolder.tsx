import * as React from 'react';

import { Index } from './index/Index';
import { Login } from './login/Login';
import { useRouter } from 'next/router';

export const PagesHolder = () => {

    const router = useRouter();

    const [isMounted, setIsMounted] = React.useState<boolean>(false)

    React.useEffect(() => setIsMounted(true), [])

    const handlePageNavigation = () => {
        if (router.pathname === '/') {
            return <Index />
        }
        else if (router.pathname === '/login') {
            return <Login />
        }
    }

    return (
        <div className="PagesHolder">
            {isMounted && handlePageNavigation()}
        </div>
    )
}
