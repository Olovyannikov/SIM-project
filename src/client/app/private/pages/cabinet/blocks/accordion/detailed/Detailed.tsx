import * as React from 'react';
import { Button } from 'app/components/button/Button';
import { Collapse } from 'app/components/collapse/Collapse';
import { Dropdown } from 'app/components/dropdown/Dropdown';
import { Table } from './table/Table';

export const Detailed = () => {

    return (
        <Collapse collapsed={true} title='Детализация'>
            <Dropdown />
            <Button bgcolor={'primary'} text={'Применить'} />
            <Table />
        </Collapse>
    )
}
