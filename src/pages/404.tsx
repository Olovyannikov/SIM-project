import * as React from 'react';
import Link from 'next/link';

export const CustomErrorPage = () => {

    return (
        <div className="ErrorPage">
            Error, back to <Link href='/'><a>main page</a></Link>
        </div>
    )

}

export default CustomErrorPage;
