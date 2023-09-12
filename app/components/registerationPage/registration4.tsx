import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import styles from "./registration.module.css";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

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
    debugger;
    alert("SUCCESFULLY REGISTERED");
  };

  return (
    <main className={styles.main}>
      <h1>REG1</h1>
    </main>
  );
}
