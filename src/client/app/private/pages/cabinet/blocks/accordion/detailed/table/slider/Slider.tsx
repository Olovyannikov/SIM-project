import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from "./slide/Slide";
import { Row } from "./slide/row/Row";

export const Slider = () => {
    return (
        <Swiper
            pagination={{clickable: true}}
            spaceBetween={0}
            slidesPerView={1}
            updateOnWindowResize={true}
        >
            {/* todo - свайпер слиде и тейбл слиде? */}
            <SwiperSlide>
                <Slide>
                    <Row date={'24.05.2020'} request={'Списание'} title={'Абонентская плата'}
                              money={-560}/>
                    <Row date={'24.05.2020'} request={'Списание'} title={'Абонентская плата'}
                              money={-560}/>
                    <Row date={'24.05.2020'} request={'Списание'} title={'Абонентская плата'}
                              money={-560}/>
                    <Row date={'24.05.2020'} request={'Списание'} title={'Абонентская плата'}
                              money={-560}/>
                </Slide>
            </SwiperSlide>

            <SwiperSlide>
                <Slide>
                    <Row date={'24.05.2020'} request={'Списание'} title={'Абонентская плата'}
                              money={-560}/>
                    <Row date={'24.05.2020'} request={'Списание'} title={'Абонентская плата'}
                              money={-560}/>
                    <Row date={'24.05.2020'} request={'Списание'} title={'Абонентская плата'}
                              money={-560}/>
                </Slide>
            </SwiperSlide>

            <SwiperSlide>
                <Slide>
                    <Row date={'24.05.2020'} request={'Списание'} title={'Абонентская плата'}
                              money={-560}/>
                    <Row date={'24.05.2020'} request={'Списание'} title={'Абонентская плата'}
                              money={-560}/>
                </Slide>
            </SwiperSlide>

            <SwiperSlide>
                <Slide>
                    <Row date={'24.05.2020'} request={'Списание'} title={'Абонентская плата'}
                              money={-560}/>
                </Slide>
            </SwiperSlide>
        </Swiper>
    )
}

const slides = [
    [
        {
            id: 0,
            tableDate: '24.05.2021',
            tableRequest: 'Списание',
            tableTitle: 'Абонентская плата',
            tableMoney: -560
        },
        {
            id: 1,
            tableDate: '24.06.2021',
            tableRequest: 'Списание',
            tableTitle: 'Абонентская плата',
            tableMoney: -560
        },
        {
            id: 2,
            tableDate: '24.07.2021',
            tableRequest: 'Списание',
            tableTitle: 'Абонентская плата',
            tableMoney: -560
        },
    ],
    [
        {
            id: 3,
            tableDate: '24.05.2021',
            tableRequest: 'Списание',
            tableTitle: 'Абонентская плата',
            tableMoney: -560
        },
        {
            id: 4,
            tableDate: '24.06.2021',
            tableRequest: 'Списание',
            tableTitle: 'Абонентская плата',
            tableMoney: -560
        },
        {
            id: 5,
            tableDate: '24.07.2021',
            tableRequest: 'Списание',
            tableTitle: 'Абонентская плата',
            tableMoney: -560
        },
    ],
    [
        {
            id: 6,
            tableDate: '24.05.2021',
            tableRequest: 'Списание',
            tableTitle: 'Абонентская плата',
            tableMoney: -560
        },
        {
            id: 7,
            tableDate: '24.06.2021',
            tableRequest: 'Списание',
            tableTitle: 'Абонентская плата',
            tableMoney: -560
        },
        {
            id: 8,
            tableDate: '24.07.2021',
            tableRequest: 'Списание',
            tableTitle: 'Абонентская плата',
            tableMoney: -560
        },
    ],
]
