"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./registration.module.css";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/navigation";

import { useRegistration } from "../RegistrationContext";

const theme = createTheme();

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

export default function registration() {
  const router = useRouter();

  const { setCurrentStep } = useRegistration();

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

  const nextStep = () => {
    setCurrentStep(1);
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
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Kullanıc Adı"
                name="username"
                autoComplete="username"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="password"
                label="Şifrenizi Giriniz"
                name="password"
                type={showPassword ? "text" : "password"}
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="password"
                label="Şifrenizi Tekrar Giriniz"
                name="password"
                type={showPassword ? "text" : "password"}
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
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="E-posta Adresiniz Tekrar"
                name="email"
                autoComplete="email"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="shopname"
                label="Mağaza Adı"
                name="shopname"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="shopname"
                label="Mağaza Adı Tekrar"
                name="shopname"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-select-currency"
                select
                fullWidth
                label="Üyelik Türü"
                defaultValue="EUR"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={nextStep}
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
        </Box>
      </Container>
    </main>
  );
}
