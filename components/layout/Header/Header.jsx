import Link from "next/link"
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <a href='/'>
          <span className={styles.logoCore}>TOP10</span>
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/about'><span>ABOUT</span>Us</Link>
          </li>
          <li>
            <Link href='/contact'><span>Contact</span>Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header