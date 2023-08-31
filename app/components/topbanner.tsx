import styles from '../css/topbanner.module.css'
import Image from 'next/image'
import stock from './images/stock.png'
import Text from 'react'
import { AspectRatio } from '@mui/joy'

export default function topbanner() {
    return (
        <main className={styles.main}>
        <div className={styles.main} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
            <Image
                className={styles.image}
                src={stock}
                alt="Ücretsiz Muhasebe"
            />
            <Image
                className={styles.image}
                src={stock}
                alt="Ücretsiz Rezervasyon"      
            />
            <Image
                className={styles.image}
                src={stock}
                alt="Ücretsiz Entegrasyon"

            />
</div>
</main>
)}