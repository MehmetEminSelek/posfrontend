import styles from '../css/bottombanner.module.css'
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MapIcon from '@mui/icons-material/Map';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';


export default function bottombanner() {
    return (
        <main className={styles.main}>

            <Grid container spacing={3}
                justifyContent="center"
                >
                <Grid item xs={6} md={6}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">   
                    <span>
                        <MapIcon sx={{ fontSize: 200 }} color='primary' />
                        <div className={styles.text}>AAAA</div>
                    /</span>
                </Grid>
                <Grid item xs={6} md={6}
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center">   
                    <span>
                        <MapIcon sx={{ fontSize: 200 }} color='primary' />
                        <div className={styles.text}>AAAA</div>
                    /</span>
                </Grid>
                <Grid item xs={6} md={6}
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center">   
                    <span>
                        <MapIcon sx={{ fontSize: 200 }} color='primary' />
                        <div className={styles.text}>AAAA</div>
                    /</span>
                </Grid>
            </Grid>                                  
           </main>    
    )
}