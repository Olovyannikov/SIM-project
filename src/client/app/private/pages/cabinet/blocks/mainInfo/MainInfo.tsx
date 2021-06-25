import { TopUpBalance } from "./topUpBalance/TopUpBalance";
import { Balance } from "./balance/Balance";
import { UserInfo } from "./userInfo/UserInfo";
import { Disclaimer } from "./disclaimer/Disclaimer";
import s from './MainInfo.module.scss';

export const MainInfo = () => {
    return (
        <section className={s.mainInfo}>
            <div className={`container`}>
                <div className={s.top}>
                    <UserInfo/>
                    <Balance />
                    <TopUpBalance/>
                </div>
                <Disclaimer/>
            </div>
        </section>
    )
}
