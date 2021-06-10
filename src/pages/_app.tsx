import * as React from 'react';
import { Application } from 'app/Application';

import '../client/index.scss';
import '../client/resources/fonts.css'

interface AppModel {
    Component : any;
    pageProps : any;
}

const App = ({Component, pageProps} : AppModel) => {
    
    return ( 
        <Application>
            <Component {...pageProps} />
        </Application>
    )
}

export default App;

