import Link from "next/link"
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <a href='/' aria-label="Top 10 Artists on Spotify Home page">
          <span className={styles.logoCore}>TOP10</span>
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/about' aria-label="About us page" ><span>ABOUT</span>Us</Link>
          </li>
          <li>
            <Link href='/contact' aria-label="Contact us page"><span>Contact</span>Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header