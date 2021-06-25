import s from './Accordion.module.scss';
import { Detailed } from "./detailed/Detailed";
import { Settings } from "./settings/Settings";
import { FAQ } from "./faq/FAQ";



export const Accordion = () => {

    return (
        <section className={s.accordion}>
            <div className="container">
                <Detailed />
                <Settings />
                <FAQ />
            </div>
        </section>

    )
}
