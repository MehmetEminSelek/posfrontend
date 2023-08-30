import styles from '../css/topbanner.module.css'
import Image from 'next/image'

export default function topbanner() {
    return (
        <main className={styles.main}>
        <div className={styles.main} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
    <Image
        src=""
        alt="Ücretsiz Muhasebe"
        width={144}
        height={144}      
    />
    <Image
        src=""
        alt="Ücretsiz Rezervasyon"
        width={144}
        height={144}      
    />
    <Image
        src=""
        alt="Ücretsiz Entegrasyon"
        width={144}
        height={144}      
    />
</div>
</main>
)}