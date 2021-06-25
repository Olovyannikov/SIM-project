import * as React from 'react';
import { Application } from 'app/Application';
import { PrivateRoute } from '../client/app/context/Proviger';

import '../client/index.scss';
import '../client/resources/fonts.css'

interface AppModel {
    Component : any;
    pageProps : any;
}

export type ProtectedRouters = '/cabinet';

export const protectedRoutes : ProtectedRouters[] = ['/cabinet'];

const App = ({Component, pageProps} : AppModel) => {
    
    return ( 
        <Application>
            <PrivateRoute protectedRoutes={protectedRoutes}>
                <Component {...pageProps} />
            </PrivateRoute>
        </Application>
    )
}

export default App;

