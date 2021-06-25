import { Form } from './form/Form';
import { Decoration } from "./decoration/Decoration";
import s from './Registration.module.scss'

export const Registration = () => {
    return (
        <section className={s.registration}>
            <div className={`container ${s.wrapper}`}>
                <div className={s.left}>
                    <h2 className={s.title}>Активация новой SIM-карты</h2>
                    <p className={s.descr}>Добавляйте ваши SIM и управляйте ими из единого интерфейса. Для
                        активации некоторых SIM потребуется передача ваших данных оператору связи.</p>
                    <Form />
                </div>
                <Decoration />
            </div>
        </section>
    )
}
