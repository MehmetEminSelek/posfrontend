import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styles from "./registration.module.css";
import { Divider, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
};

interface RegistrationProps {
  setRegistrationPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function registration3({
  setRegistrationPage,
}: RegistrationProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [reg3Data, setReg3Data] = useState({
    name: "",
    surname: "",
    title: "",
    phoneNumber: "",
    phoneNumber2: "",
    email: "",
    address: "",
    postalCode: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    axios
      .post("http://localhost:8000/api/v1/register/user", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(reg3Data),
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setRegistrationPage(3);
  };

  return (
    <main className={styles.main}>
      <Grid
        direction={"row"}
        component="main"
        onSubmit={handleSubmit}
        maxWidth="xs"
      >
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
                value={reg3Data.name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setReg3Data({
                    ...reg3Data,
                    name: event.currentTarget.value,
                  });
                }}
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
                value={reg3Data.surname}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setReg3Data({
                    ...reg3Data,
                    surname: event.currentTarget.value,
                  });
                }}
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
                value={reg3Data.title}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setReg3Data({
                    ...reg3Data,
                    title: event.currentTarget.value,
                  });
                }}
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
                value={reg3Data.phoneNumber}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setReg3Data({
                    ...reg3Data,
                    phoneNumber: event.currentTarget.value,
                  });
                }}
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
                value={reg3Data.phoneNumber2}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setReg3Data({
                    ...reg3Data,
                    phoneNumber2: event.currentTarget.value,
                  });
                }}
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
                value={reg3Data.email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setReg3Data({
                    ...reg3Data,
                    email: event.currentTarget.value,
                  });
                }}
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
                value={reg3Data.address}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setReg3Data({
                    ...reg3Data,
                    address: event.currentTarget.value,
                  });
                }}
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
                value={reg3Data.postalCode}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setReg3Data({
                    ...reg3Data,
                    postalCode: event.currentTarget.value,
                  });
                }}
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
                  İletişim Yetkilisi Bilgileri
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
      </Grid>
    </main>
  );
}
