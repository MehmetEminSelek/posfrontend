import Image from "next/image";
import React from "react";
import styles from "./css/footer.module.css";
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
      <Grid container spacing={12} className={styles.footer}>
        <Grid>
          <h3>Bilgi Edinin</h3>
          <p>Tüm Ürünler</p>
          <p>Giriş</p>
          <p>Reklam</p>
          <p>Dağıtımcılar</p>
        </Grid>
        <Grid>
          <h3>Bilgi Edinin</h3>
          <p>Tüm Ürünler</p>
          <p>Giriş</p>
          <p>Reklam</p>
          <p>Dağıtımcılar</p>
        </Grid>
        <Grid>
          <h3>Bilgi Edinin</h3>
          <p>Tüm Ürünler</p>
          <p>Giriş</p>
          <p>Reklam</p>
          <p>Dağıtımcılar</p>
        </Grid>
        <Grid>
          <h3>Bilgi Edinin</h3>
          <p>Tüm Ürünler</p>
          <p>Giriş</p>
          <p>Reklam</p>
          <p>Dağıtımcılar</p>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center" }}
        xs={9}
        spacing={6}
        className={styles.footer}
      >
        <Grid
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <InstagramIcon />
          <h3>İngilizce</h3>
        </Grid>
        <Grid>
          <h3>Bize Ulaşın</h3>
        </Grid>
        <Grid>
          <h3>Gizlilik ve tanımlama bilgileri</h3>
        </Grid>
        <Grid>
          <h3>Kullanım Koşulları</h3>
        </Grid>
        <Grid>
          <h3>2006 Darı Çare</h3>
        </Grid>
      </Grid>
    </main>
  );
}
