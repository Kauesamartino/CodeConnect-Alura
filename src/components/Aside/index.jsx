import styles from './aside.module.css'
import Image from 'next/image'
import logo from './Logo.png'

export const Aside = () => {
    return (
        <div className={styles.aside}>
            <Image src={logo} alt='Logo'/>
        </div>
    )
}