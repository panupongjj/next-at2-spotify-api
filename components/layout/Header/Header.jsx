import Link from "next/link"
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href='/'>
          <span className={styles.logoCore}>JAY - DOWNUNDER . DEV</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/artists'><span>ARTISTS</span></Link>
          </li>
          <li>
            <Link href='/about'><span>ABOUT</span>Us</Link>
          </li>
          <li>
            <Link href='/contact'><span>Contact</span>Us</Link>
          </li>
          <li>
            <Link href="https://jay-downunder.dev/" target="_blank" rel="noopener noreferrer">
                <span>DEPLOY</span>LINK
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header