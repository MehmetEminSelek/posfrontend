import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardCover from "@mui/joy/CardCover";
import styles from "./css/videobanner.module.css";

export default function videobanner() {
  return (
    <main className={styles.main}>
      <Grid container spacing={2} justifyContent="space-evenly">
        <Grid
          item
          xs={12}
          md={6}
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Card
            sx={{ maxWidth: 450, minWidth: 350, backgroundColor: "whitesmoke" }}
          >
            <Typography
              marginLeft={"15px"}
              margin={"15px"}
              gutterBottom
              component="div"
            >
              <b>Muhasebe</b>
            </Typography>
            <CardMedia
              sx={{ height: 105 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography>
                <b>Daha Kolay Muhasebe Deneyimi</b>
              </Typography>
              Nesnelerin interneti (IoT), iş açısından kritik bir unsur haline
              gelme yolunda hızla ...
            </CardContent>
          </Card>
          <Card
            sx={{ maxWidth: 450, minWidth: 350, backgroundColor: "whitesmoke" }}
          >
            <Typography marginLeft={"15px"} gutterBottom component="div">
              <CardCover>
                <video
                  autoPlay
                  loop
                  muted
                  poster="https://assets.codepen.io/6093409/river.jpg"
                >
                  <source
                    src="https://assets.codepen.io/6093409/river.mp4"
                    type="video/mp4"
                  />
                </video>
              </CardCover>
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </main>
  );
}
