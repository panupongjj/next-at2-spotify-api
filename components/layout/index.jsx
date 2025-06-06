import styles from './Layout.module.scss';
import Header from './Header';
import Footer from './Footer';
import GoogleAnalytic from './GoogleAnalytic';
import { Lato} from 'next/font/google';
import singletonArtistList from '@/lib/artistsController';  

const lato = Lato({
  subsets: ['latin'],
  weight: ['300','400', '700'],
  style: ['normal', 'italic']
})

function Layout(props) {
  singletonArtistList.generateArtistList()
  return (
    <div className={`${styles.app} ${lato.className}`}>
      <GoogleAnalytic />  
      <Header />
      <main className={styles.main}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
