import styles from '../css/profile.module.css'
import Stack from '@mui/joy/Stack';
import Person from '@mui/icons-material/Person';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/joy/Button';

export default function profile() {
    return (
        <main className={styles.profile}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Button disabled color="neutral" size="lg" variant="solid">PoS Sistem</Button>
    </div>
            <Stack className={styles.profile}
            justifyContent="center" 
            direction="row" 
            spacing={2}
            sx={{ position: "fixed", top: 0, right: 0, zIndex: 2000 }}
            >
                <Typography>Merhaba, Hesabınıza giriş yapın<IconButton size="small"><Person />
                </IconButton>
                <Button color="neutral" size="sm" variant="solid">Abone Olun</Button>   
                </Typography>         
            </Stack>           
        </main>
    )
    }