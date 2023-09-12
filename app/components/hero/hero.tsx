import styles from "./hero.module.css";
import Image from "next/image";
import stock from "../../../public/images/stock.png";

export default function Hero() {
  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.box}>
          <Image
            className={styles.image}
            src={stock}
            alt="Ücretsiz Entegrasyon"
          />
          <div className={styles.boxText}>Ücretsiz Muhasebe</div>
        </div>
        <div className={styles.box}>
          <Image
            className={styles.image}
            src={stock}
            alt="Ücretsiz Entegrasyon"
          />
          <div className={styles.boxText}>Ücretsiz Rezervasyon</div>
        </div>
        <div className={styles.box}>
          <Image
            className={styles.image}
            src={stock}
            alt="Ücretsiz Entegrasyon"
          />
          <div className={styles.boxText}>Ücretsiz Entegrasyon</div>
        </div>
      </div>
      <h1 className={styles.title}>Global, Güvenilir, Karma.</h1>
      <h2 className={styles.desc}>Size özel çözüm</h2>
    </div>
  );
}
