import {Collapse} from "../../../../../../components/collapse/Collapse";
import s from './Accordion.module.scss';
import {Dropdown} from "../../../../../../components/dropdown/Dropdown";

export const Accordion = () => {

    const data = [
        {id: 0, label: "Все"},
        {id: 1, label: "Мой роутер для поездок"}
    ];

    return (
        <section className={s.accordion}>
            <div className="container">
                <Collapse collapsed='collapsed' title='Детализация'>
                    <Dropdown data={data} title={'TITLE'}/>
                </Collapse>
                <Collapse collapsed='collapsed' title='Настройки входа'>
                    <h1>This is a collapse</h1>
                    <p>Hello world!</p>
                </Collapse>
                <Collapse collapsed='collapsed' title='Частые вопросы'>
                    <h1>This is a collapse</h1>
                    <p>Hello world!</p>
                </Collapse>
            </div>
        </section>

    )
}