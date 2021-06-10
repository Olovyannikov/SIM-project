import * as React from 'react';

import Link from 'next/link';

interface ApplicationModel {
    children?: React.ReactChild
}

export const Application = (props: ApplicationModel) => {

    return (
        <div className="Application">
            {/* <Link href='/'><a>Main</a></Link> */}
            {/* <Link href='/cabinet'><a> Cabinet</a></Link> */}
            <div className="Desktop">
                {props.children}
            </div>
            {/* <div className="Mobile">
                <MobileApplication />
            </div> */}
        </div>
    )
}
