import Link from 'next/link';
import styles from "./header.module.css";
import Person from "@mui/icons-material/Person";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/joy/Button";

interface HeaderProps {
  setRegistrationPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.button}>
      <Link href="/">
        <div className={styles.title}>
          PoS Sistem
        </div>
      </Link>
      </div>
      <div className={styles.stack}>
        <Typography>
          Merhaba, Hesabınıza giriş yapın
          <Link href="/profile" className={styles.icon}>
            <IconButton size="small">
              <Person />
            </IconButton>
          </Link>
          <Link href="/registration" className={styles.button}>
              <Button color="neutral" size="sm" variant="solid">
                Abone Olun
              </Button>
          </Link>
        </Typography>
      </div>
    </div>
  );
}
