import {megafonIcon} from '../../../../../../../components/icons/Icons';
import s from './SimCardItems.module.scss';
import {Item} from "./item/Item";

export const SimCardItems = () => {
    return (
        <ul className={`list-reset ${s.simCardsItems}`}>
            <Item isEmpty={false} progressLeft={'8'} operatorIcon={megafonIcon()} tariffTitle={'Безлимитный интернет'} titleName={'Новая SIM-карта Новая SIM-карта Новая SIM-карта Новая SIM-карта '} price={'590'}/>
            <Item isEmpty={true}/>
        </ul>
    )
}