import { megafonIcon } from '../../../../../../components/icons/Icons';
import s from './SimCardItems.module.scss';
import { SimItem } from "./simItem/SimItem";
import { AddSim } from './addSim/AddSim';

export const SimCardItems = () => {
    return (
        <ul className={`list-reset ${s.simCardsItems}`}>
            <SimItem />
            <SimItem />
            <AddSim />
        </ul>
    )
}
