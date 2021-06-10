import {Header} from "../header/Header";

export const MainLayout = (props: {children: any}) => {
    return (
        <>
            <Header />
            <main className='main'>
                {props.children}
            </main>
        </>
    )
}