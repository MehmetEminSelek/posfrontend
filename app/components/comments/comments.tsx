import styles from "./comments.module.css";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { Avatar, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function comments() {
  return (
    <main className={styles.main}>
      <Grid container spacing={2} justifyContent="space-evenly">
        <Grid
          item
          xs={6}
          md={6}
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Stack
            direction="row"
            spacing={8}
            margin={"15px"}
            alignItems="center"
          >
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
          </Stack>
        </Grid>
      </Grid>
    </main>
  );
}
