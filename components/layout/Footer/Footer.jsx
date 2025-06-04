import styles from './Footer.module.scss'

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={styles.footerbottom}>
      <p>
        &copy; {getCurrentYear()} Jay-downUnder.dev
      </p>
          
    </div>
  );
}

export default Footer;