import styles from '../css/midbanner.module.css'
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function midbanner() {
    return (
        <main className={styles.main}>
            <Grid container spacing={2}
                justifyContent="space-evenly"
                >
                <Grid item xs={12} md={6}
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center">
                    <Stack direction="row" spacing={8} alignItems="center">
                         <Card sx={{ maxWidth: 450 , minWidth:350 , backgroundColor:'whitesmoke'}}>
                            <Typography marginLeft={"15px"} gutterBottom component="div">
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
                              Nesnelerin interneti (IoT), iş açısından kritik bir unsur haline gelme yolunda hızla ...
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 450 , minWidth:350, backgroundColor:'whitesmoke'}}>
                            <Typography marginLeft={"15px"} gutterBottom component="div">
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
                              Nesnelerin interneti (IoT), iş açısından kritik bir unsur haline gelme yolunda hızla ...
                            </CardContent>
                        </Card>
                        <Card sx={{ maxWidth: 450 , minWidth:350}}>
                            <Typography marginLeft={"15px"} gutterBottom component="div">
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
                              Nesnelerin interneti (IoT), iş açısından kritik bir unsur haline gelme yolunda hızla ...
                            </CardContent>
                        </Card>
                    </Stack>
                    </Grid>
                </Grid>
            </main>
    )
    }