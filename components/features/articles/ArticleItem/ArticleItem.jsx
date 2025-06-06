import styles from './ArticleItem.module.scss';
import { useRouter } from 'next/router'; //hook
import Image from 'next/image';
import Card from '@/components/common/Card';
import ButtonLink from '@/components/common/ButtonLink';

import Button from '@/components/common/Button';


function ArticleItem(props) {
  const router = useRouter();
  function handleNavigate(){
    router.push('/'+props.id)
  }


  return (
    <Card size="grid">
      {/* CARD MAIN */}
      <div className={styles.articleMain}>
        <div className={styles.imageBox}>
          {props.image? 
          <Image 
            className={styles.nextImage}
            src={props.image} 
            alt={props.title} 
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
          /> 
          :
          <Image 
            className={styles.nextImage}
            src={props.urlToImage} 
            alt={props.title} 
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
          /> 

          }
        </div>
        <div className={styles.articleContent}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
      {/* CARD FOOTER */}
      <div className={styles.articleFooter}>
       {props.image? // use image to check this is a custom API (internal API)
        <Button onClick={handleNavigate} >Show Detail</Button>
        :
        <ButtonLink path={props.url} target="_blank">
          Link to Article
        </ButtonLink>}
      </div>
    </Card>
  );
}

export default ArticleItem;