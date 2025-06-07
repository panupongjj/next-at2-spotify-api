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
          </Link>
        </div>
        <div className={styles.articleContent}>
          <h2>{props.title}</h2>
          {/* <p>{props.description}</p> */}
        </div>
      </div>
    </Card>
  );
}

export default ArticleItem;