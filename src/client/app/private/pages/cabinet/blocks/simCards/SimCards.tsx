import { SimCardItems } from "./simCardsItems/SimCardItems";
import s from './SimCards.module.scss';

export const SimCards = () => {
    return (
        <section id="sim-cards" className={s.simCards}>
            <div className={`${s.wrapper} container`}>
                <h2 className={s.title}>Ваши SIM-карты <span className={s.count}>(1)</span></h2>
                <SimCardItems/>
            </div>
        </section>
    )
}
