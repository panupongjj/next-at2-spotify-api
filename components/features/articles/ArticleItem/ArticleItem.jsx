import styles from './ArticleItem.module.scss';
//import { useRouter } from 'next/router'; //hook
import Image from 'next/image';
import Card from '@/components/common/Card';
import Link from 'next/link';
// import ButtonLink from '@/components/common/ButtonLink';

// import Button from '@/components/common/Button';


function ArticleItem(props) {
  return (
    <Card size="grid">
      {/* CARD MAIN */}
      <div className={styles.articleMain}>
        <div className={styles.imageBox}>
          <Link className={styles.imageLink}
            href={props.url}
            target={"_blank"}
          > 
              {<Image 
                className={styles.nextImage}
                src={props.urlToImage} 
                alt={props.title} 
                fill={true}
                sizes="(max-width: 768px) 100vw, 50vw"
              /> }
              {<Image 
                className={styles.hoverImage}
                src={'/backgrounds/play-button.png'} 
                alt={props.title} 
                fill={true}
                sizes="(max-width: 768px) 100vw, 50vw"
              /> }
          </Link>
        </div>
        <div className={styles.articleContent}>
          <h2 className={styles.textName}>{props.title} </h2> 
          <Link className={styles.textLink}
            href={props.spotifyUrl}
            target={"_blank"}
          > 
              {  <img src="/icons/spotify.svg" />}
      
          </Link>
         
        </div>
      </div>
    </Card>
  );
}

export default ArticleItem;