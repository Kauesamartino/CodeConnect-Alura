import styles from './aside.module.css'
import Image from 'next/image'
import logo from './Logo.png'
import Link from 'next/link'

export const Aside = () => {
    return (
        <div className={styles.aside}>
            <Link href={"/"}>
                <Image src={logo} alt='Logo' />
            </Link>
        </div>
    )
}