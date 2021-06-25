import * as React from 'react';

import { Collapse } from "../../../../../../components/collapse/Collapse";

export const FAQ = () => {

    return (
        <Collapse collapsed={true} title='Частые вопросы'>
            <Collapse collapsed={true} title='Как узнать условия моего тарифа'>
                12
            </Collapse>
            <Collapse collapsed={true} title='Как сменить тариф для SIM-карты'>
                12
            </Collapse>
            <Collapse collapsed={true} title='Как добавить новую SIM-карту'>
                12
            </Collapse>
            <Collapse collapsed={true} title='Зачем оператору мои данные'>
                12
            </Collapse>
        </Collapse>
    )
}
