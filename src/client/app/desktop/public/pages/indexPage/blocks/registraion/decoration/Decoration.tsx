import {simcard_image} from "../../../../../../../../resources/images";
import s from './Decoration.module.scss';

export const Decoration = () => {
    return (
        <div className={s.decoration}>
            <img src={simcard_image} alt="" />
            <div className={s.text}>
                <div className={s.textItem}>
                    <span>SIM ID:</span>
                    <span>0077700001</span>
                </div>
                <div className={s.textItem}>
                    <span>PASSWORD</span>
                    <span>757361</span>
                </div>
            </div>
            <div className={s.descr}>
                Храните и управляйте  SIM-картами для ваших устройств  в едином личном кабинете
            </div>
        </div>
    )
}