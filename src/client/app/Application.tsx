import * as React from 'react';
import { Header } from "./components/header/Header";

interface ApplicationModel {
    children?: React.ReactChild
}

export const Application = (props: ApplicationModel) => {

    return (
        <div className="Application">
            <Header />
            {props.children}
        </div>
    )
}
