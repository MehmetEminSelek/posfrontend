import styles from "./videobanner.module.css";
import Image from "next/image";
import video from "../../../public/images/video.png";

export default function videobanner() {
  return (
    <main className={styles.main}>
      <div className={styles.textBox}>
        <p className={styles.title}>Daha Fazlasını Keşfedin</p>
        <p className={styles.subtitle}>Kullanmaya başlamanın ne kadar kolay olduğunu görün</p>
        <p className={styles.text}>Nam vitae condimentum elit. Proin rhoncus porttitor leo, vitae dignissim nunc. Etiam sit amet vulputate massa, in dictum quam. Praesent efficitur sit amet magna eget pulvinar. Suspendisse volutpat est nec ex eleifend cursus. Nullam vel nisl vitae leo pharetra facilisis. Mauris et egestas ex. Sed vestibulum gravida felis, vel imperdiet quam consectetur id.Nam vitae condimentum elit. Proin rhoncus porttitor leo, vitae dignissim nunc. Etiam sit amet vulputate massa, in dictum quam. Praesent efficitur sit amet magna eget pulvinar.</p>
        <div className={styles.button}> Daha Fazlasını Keşfedin</div>
      </div>
      <Image
            className={styles.videoBox}
            src={video}
            quality={100}
            alt="Ücretsiz Entegrasyon"
            />
    </main>
  );
}
