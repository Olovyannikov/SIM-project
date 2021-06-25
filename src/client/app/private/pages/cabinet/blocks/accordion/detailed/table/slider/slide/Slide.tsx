import s from "../../Table.module.scss";
import { SwiperSlide } from "swiper/react";
import { Row } from './row/Row';

interface TableSlideModel {
    children?: any
}

export const Slide = (props: TableSlideModel) => {
    return (
        <table>
            <tbody>
            <tr>
                <td>
                    <table className={s.table}>
                        <tbody>
                            {props.children}
                        </tbody>
                    </table>
                </td>
            </tr>
            </tbody>
        </table>
    )
}
