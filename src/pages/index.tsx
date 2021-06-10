import * as React from 'react';

import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { DesktopApplication } from 'app/desktop/DesktopApplication';

const Main = () => {
    return <DesktopApplication />
}

export const getServerSideProps : GetServerSideProps = async (context : GetServerSidePropsContext) => {

    return {
        props : {}
    }
}

export default Main;
