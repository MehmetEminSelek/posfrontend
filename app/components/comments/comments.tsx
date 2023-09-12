"use client";

//passaparola.app@gmail.com

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./comments.module.css";
import { Avatar, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function comments() {
  return (
    <main className={styles.main}>
      <Grid container spacing={2} justifyContent="space-evenly">
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
          {[...Array(3)].map((_, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  maxWidth: 650,
                  minWidth: 400,
                  backgroundColor: "whitesmoke",
                }}
              >
                <Typography
                  marginLeft={"15px"}
                  margin={"15px"}
                  gutterBottom
                  component="div"
                >
                  <p>
                    Merhabalar Pos Sistem sayesinde muhasebe işlemlerimizi
                    dokunmatik ekran ile çok daha kolay yapmaya başladık., Bu
                    sayede iş yükümüzü azalması ile birlikte müşteri
                    memnuniyetimizde arttı ..
                  </p>
                  <p>Çok Teşekkürler</p>
                </Typography>
                <CardContent className={styles.avatar}>
                  <Avatar
                    sx={{ width: 56, height: 56 }}
                    src="/static/images/avatar/1.jpg"
                  />
                  <Typography>
                    <b>Ali Yılmaz</b>
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </main>
  );
}
