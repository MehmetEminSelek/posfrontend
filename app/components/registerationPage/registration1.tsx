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

import { useState } from "react";

import axios from "axios";

const theme = createTheme();

const currencies = [
  {
    value: "demo",
    label: "Demo",
  },
  {
    value: "monthly",
    label: "Aylık",
  },
  {
    value: "yearly",
    label: "Yıllık",
  }
];
interface RegistrationProps {
  setRegistrationPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function registration1({
  setRegistrationPage,
}: RegistrationProps) {
  const router = useRouter();

  const [showPassword, setShowPassword] = React.useState(false);

  const [reg1Data, setReg1Data] = useState({
    username: "",
    password: "",
    email: "",
    shopname: "",
    shopurl: "",
    membershipType: "",
  });

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    setReg1Data({
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
      email: event.currentTarget.email.value,
      shopname: event.currentTarget.shopname.value,
      shopurl: event.currentTarget.shopUrl.value,
      membershipType: event.currentTarget.membershipType,
    });

    axios.post('http://localhost:8000/api/v1/register/user', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(reg1Data)
    }).then((response) => {
      console.log(response);
      router.push('/login');
    }).catch((error) => {
      console.log(error);
    });

    setRegistrationPage(2);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
                value={reg1Data.username}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setReg1Data({
                    ...reg1Data,
                    username: event.currentTarget.value,
                  });
                }}
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
                value={reg1Data.password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setReg1Data({
                    ...reg1Data,
                    password: event.currentTarget.value,
                  });
                }}
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
                value={reg1Data.email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setReg1Data({
                    ...reg1Data,
                    email: event.currentTarget.value,
                  });
                }}
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
                value={reg1Data.shopname}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setReg1Data({
                    ...reg1Data,
                    shopname: event.currentTarget.value,
                  });
                }}
                name="shopname"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="shopUrl"
                label="Mağaza Url"
                name="shopUrl"
                size="small"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="membershipType"
              name="membershipType"
              select
              fullWidth
              label="Üyelik Türü"
              defaultValue="free"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
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
