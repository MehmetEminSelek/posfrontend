import React from 'react'
import styles from "./topbanner.module.css";
import Image from "next/image";
import stockRec from "../../../public/images/stockRec.png";

const topbanner = () => {
  return (
    <div className={styles.topbanner}>
        <div className={styles.box}>
            <h1 className={styles.title}>Muhasebe</h1>
            <Image
            className={styles.image}
            src={stockRec}
            alt="Ücretsiz Muhasebe"
            />
            <h2 className={styles.subtitle}>Daha Kolay Muhasebe Deneyimi</h2>
            <div className={styles.desc}>Nesnelerin interneti (IoT), iş açısından kritik bir unsur haline gelme yolunda...</div>
        </div>
        <div className={styles.box}>
            <h1 className={styles.title}>Rezervasyon</h1>
            <Image
            className={styles.image}
            src={stockRec}
            alt="Ücretsiz Rezervasyon"
            />
            <h2 className={styles.subtitle}>Daha Kolay Rezervasyon Deneyimi</h2>
            <div className={styles.desc}>Nesnelerin interneti (IoT), iş açısından kritik bir unsur haline gelme yolunda...</div>
        </div>
        <div className={styles.box}>
            <h1 className={styles.title}>Entegrasyon</h1>
            <Image
            className={styles.image}
            src={stockRec}
            alt="Ücretsiz Entegrasyon"
            />
            <h2 className={styles.subtitle}>Daha Kolay Entegrasyon Deneyimi</h2>
            <div className={styles.desc}>Nesnelerin interneti (IoT), iş açısından kritik bir unsur haline gelme yolunda...</div>
        </div>
    </div>
  )
}

export default topbanner