"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./bottombanner.module.css";
import { Grid } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";

export default function bottombanner() {
  return (
    <main className={styles.main}>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <span>
              <SettingsTwoToneIcon sx={{ fontSize: 200 }} color="primary" />
              <div className={styles.text}>Entegre olan yapılar</div>
            </span>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <span>
              <MapIcon sx={{ fontSize: 200 }} color="primary" />
              <div className={styles.text}>Öncü Firmalar</div>
            </span>
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <span>
              <LanguageIcon sx={{ fontSize: 200 }} color="primary" />
              <div className={styles.text}>Yeni Abonelikler</div>
            </span>
          </Grid>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
