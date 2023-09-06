import styles from "./bottombanner.module.css";
import Stack from "@mui/joy/Stack";
import { Grid } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsTwoToneIcon from "@mui/icons-material/SettingsTwoTone";

export default function bottombanner() {
  return (
    <main className={styles.main}>
      <Stack direction="row" spacing={29} margin={"15px"}>
        <Grid
          item
          xs={4}
          md={6}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <span>
            <SettingsTwoToneIcon sx={{ fontSize: 200 }} color="primary" />
            <div className={styles.text}>Entegre olan yapılar</div>/
          </span>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <span>
            <MapIcon sx={{ fontSize: 200 }} color="primary" />
            <div className={styles.text}>Öncü Firmalar</div>/
          </span>
        </Grid>
        <Grid
          item
          xs={6}
          md={6}
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <span>
            <LanguageIcon sx={{ fontSize: 200 }} color="primary" />
            <div className={styles.text}>Yeni Abonelikler</div>/
          </span>
        </Grid>
      </Stack>
    </main>
  );
}
