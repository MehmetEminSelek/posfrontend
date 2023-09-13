import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";
import { Grid } from "@mui/joy";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Divider } from "@mui/material";

export default function footer() {
  return (
    <main>
      <div>
        <div className={styles.top}>
          <h3>Bizi Takip Edin</h3>
          <InstagramIcon />
          <InstagramIcon />
        </div>
      </div>
      <div className="grid grid-flow-col md:auto-cols-min mx-auto py-2 bg-gray-200 text-center text-decoration-line: underline">
        <div>
          <h3 className="font-semibold">Bilgi Edinin</h3>
          <p>Tüm Ürünler</p>
          <p>Giriş</p>
          <p>Reklam</p>
          <p>Dağıtımcılar</p>
        </div>
        <Grid>
          <h3 className="font-semibold">Bilgi Edinin</h3>
          <p>Tüm Ürünler</p>
          <p>Giriş</p>
          <p>Reklam</p>
          <p>Dağıtımcılar</p>
        </Grid>
        <Grid>
          <h3 className="font-semibold">Bilgi Edinin</h3>
          <p>Tüm Ürünler</p>
          <p>Giriş</p>
          <p>Reklam</p>
          <p>Dağıtımcılar</p>
        </Grid>
        <Grid>
          <h3 className="font-semibold">Bilgi Edinin</h3>
          <p>Tüm Ürünler</p>
          <p>Giriş</p>
          <p>Reklam</p>
          <p>Dağıtımcılar</p>
        </Grid>
      </div>
      <Divider />
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center" }}
        spacing={2}
        className="py-4"
      >
        <Grid className="flex items-center justify-center space-x-2">
          <InstagramIcon />
          <h3 className="text-lg font-semibold">İngilizce</h3>
        </Grid>
        {[
          "Bize Ulaşın",
          "Gizlilik ve Tanımlama Bilgileri",
          "Kullanım Koşulları",
          "2006 Darı Çare",
        ].map((text, index) => (
          <Grid key={index} className="flex items-center justify-center">
            <h3 className="text-lg font-semibold  text-decoration-line:underline space-x-2">
              <Divider orientation="vertical" flexItem />
              {text}
              <Divider orientation="vertical" flexItem />
            </h3>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
