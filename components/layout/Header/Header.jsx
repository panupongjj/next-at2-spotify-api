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
            <Link href='/test'><span>TEST</span>-Feed</Link>
          </li>
          <li>
            <Link href="https://jay-downunder.dev/" target="_blank" rel="noopener noreferrer">
                <span>DEPLOY</span>LINK
            </Link>
          </li>
          <li>
            <Link href='/contact'><span>Contact</span>Us</Link>
          </li>
          <li>
            <Link href='/nextjsdoc'><span>NEXTJS</span>-DOC</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header