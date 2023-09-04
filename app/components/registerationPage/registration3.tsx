import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styles from "./registration.module.css";
import { Divider, Typography } from "@mui/material";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

interface RegistrationProps {
  setRegistrationPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function registration3({
  setRegistrationPage,
}: RegistrationProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <main className={styles.main}>
      <Container component="main" maxWidth="xs">
        <h3 className={styles.text}>Haydi Başlayalım</h3>
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <h3>Üyelik bilgilerimizi girelim ..</h3>
        <Grid
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container direction={"column"} spacing={1}>
            <Grid item xs={6}>
              <Typography
                margin={"normal"}
                color={"black"}
                variant="h6"
                gutterBottom
                component="div"
              >
                İmza Yetkilisi Bilgileri
              </Typography>
              <TextField
                required
                fullWidth
                id="name"
                label="Adınız"
                name="name"
                size="small"
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                required
                fullWidth
                id="surname"
                label="Soyadınız"
                name="surname"
                size="small"
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                required
                fullWidth
                id="title"
                label="Ünvanınız"
                name="title"
                size="small"
              />
            </Grid>
            <Typography
              marginTop={"normal"}
              margin={"normal"}
              variant="h6"
              gutterBottom
              component="div"
              color={"black"}
            >
              İletişim Bilgileri
            </Typography>
            <Grid item xs={6} md={6}>
              <TextField
                required
                fullWidth
                id="homePhone"
                label="Sabit Telefon"
                name="homePhone"
                size="small"
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                required
                fullWidth
                id="phoneNumber"
                label="Cep Telefonu"
                name="phoneNumber"
                size="small"
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="E-posta Adresiniz"
                name="email"
                size="small"
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                required
                fullWidth
                id="address"
                label="Adres Bilgileri"
                name="address"
                size="small"
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextField
                required
                fullWidth
                id="postalCode"
                label="Posta Kodu"
                name="postalCode"
                size="small"
              />
            </Grid>
            <Grid container direction={"column"} spacing={1}>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  gutterBottom
                  component="div"
                  color={"black"}
                >
                  İmza Yetkilisi Bilgileri
                </Typography>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Adınız"
                  name="name"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="surname"
                  label="Soyadınız"
                  name="surname"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Ünvanınız"
                  name="title"
                  size="small"
                />
              </Grid>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                color={"black"}
              >
                İletişim Bilgileri
              </Typography>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="homePhone"
                  label="Sabit Telefon"
                  name="homePhone"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Cep Telefonu"
                  name="phoneNumber"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="E-posta Adresiniz"
                  name="email"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Adres Bilgileri"
                  name="address"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="postalCode"
                  label="Posta Kodu"
                  name="postalCode"
                  size="small"
                />
              </Grid>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => setRegistrationPage(4)}
          >
            Devam Et
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Üyeliğiniz var mı? Giriş Yapın
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
