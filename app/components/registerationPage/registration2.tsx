"use client"

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styles from "./registration.module.css";

import { useState } from "react";

export default function Registration2() {
  const [reg2Data, setReg2Data] = useState({
    companyTitle: "",
    companyType: "",
    companyName: "",
    brandName: "",
    mersisNo: "",
    ticaretOdası: "",
    kepAddress: "",
    taxOffice: "",
    taxNumber: "",
    address: "",
    addressDetail: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setReg2Data({
      companyTitle: event.currentTarget.companyTitle.value,
      companyType: event.currentTarget.companyType.value,
      companyName: event.currentTarget.companyName.value,
      brandName: event.currentTarget.brandName.value,
      mersisNo: event.currentTarget.mersisNo.value,
      ticaretOdası: event.currentTarget.ticaretOdası.value,
      kepAddress: event.currentTarget.kepAddress.value,
      taxOffice: event.currentTarget.taxOffice.value,
      taxNumber: event.currentTarget.taxNumber.value,
      address: event.currentTarget.address.value,
      addressDetail: event.currentTarget.addressDetail.value,
    });
    debugger;

    fetch("http://localhost:8000/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reg2Data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          console.log("success");
        } else {
          console.log(reg2Data);
        }
      })
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
                id="companyTitle"
                label="Şirket Ünvanı"
                name="companyTitle"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="companyType"
                label="Şirket Türü"
                name="companyType"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="companyName"
                label="İşletme Adı"
                name="companyName"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="brandName"
                label="Tescilli Marka"
                name="brandName"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="mersisNo"
                label="MERSİS NO"
                name="mersisNo"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="ticaretOdası"
                label="Ticaret Odası"
                name="ticaretOdası"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="kepAddress"
                label="KEP Adresi"
                name="kepAddress"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="taxOffice"
                label="Vergi Dairesi"
                name="taxOffice"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="taxNumber"
                label="Vergi No"
                name="taxNumber"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="address"
                label="Adres"
                name="address"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="addressDetail"
                label="Adres Bilgisi"
                name="addressDetail"
                size="small"
              />
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
        </Box>
      </Container>
    </main>
  );
}
