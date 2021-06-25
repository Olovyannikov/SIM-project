import SwiperCore, { Pagination } from 'swiper';
import { Slider } from "./slider/Slider";

SwiperCore.use([Pagination]);

// todo - нейминг?

export const Table = () => {
    return (
        <Slider />
    )
}
