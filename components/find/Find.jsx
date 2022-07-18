import React from 'react';
import styles from './Find.module.css';
import Card from './Card';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation'

const Find = () => {
    return (
        <div className={styles.find}>
            <div className={styles.heading}>
                <h1>Find your drive</h1>
                <div className={styles.text_bg}>
                    <p>
                        <span>Explore the world's largest car-sharing marketplace</span>
                    </p>
                </div>
            </div>
            <div className={styles.slider_container}>
                <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={5}
                navigation
                breakpoints={{
                    //when window width is >= 340px
                    340: {
                        width: 200,
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 4,
                    },
                    //when window width is >= 1040px
                    1040: {
                        width: 1040,
                        slidesPerView: 5,
                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1589536672709-a5d34b12466d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
                        make='Audi' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1617918573088-82a770798da7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        make='Mercedes' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1554666869-04dafcdc7a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80'
                        make='BMW' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1625776903580-e8af5930c225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80'
                        make='Toyota' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1589148938909-4d241c91ee52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        make='Cadillac' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1609532269538-57cbf63135c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        make='Corvette' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card image='https://images.unsplash.com/photo-1590043586864-d05a4ff3ec08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        make='Ford' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Find 