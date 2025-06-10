import styles from './ArticleItem.module.scss';
//import { useRouter } from 'next/router'; //hook
import Image from 'next/image';
import Card from '@/components/common/Card';
import Link from 'next/link';
// import ButtonLink from '@/components/common/ButtonLink';

// import Button from '@/components/common/Button';


function ArticleItem(props) {
  //console.log(props.type);
  
  return (
    <Card size="grid">
      {/* CARD MAIN */}
      <div className={styles.articleMain}>
        <div className={styles.imageBox}>
          <Link className={styles.imageLink}
            href={props.type === 'artist'? props.url : props.spotifyUrl}
            target={"_blank"}
            //aria-label={`Click for more about ${props.title}`}
          > 
              {
                <Image 
                className={styles.nextImage}
                src={props.urlToImage} 
                //alt={`Picture of ${props.title}`} 
                fill={true}
                sizes="(max-width: 768px) 100vw, 50vw"
              /> 
              }
              {
                <Image 
                className={styles.hoverImage}
                src={'/backgrounds/play-button.png'} 
                //alt={`Picture of ${props.title}`} 
                fill={true}
                sizes="(max-width: 768px) 100vw, 50vw"
              /> }
          </Link>
        </div>
        <div className={styles.articleContent}>
          <h2 className={styles.textName}>{props.title} </h2> 
          {
            props.type === 'artist'?
            <Link className={styles.textLink}
              href={props.spotifyUrl}
              target={"_blank"}
              //aria-label="Read more about Seminole tax hike"
              rel="noopener noreferrer"> 
              {  <img src="/icons/spotify.svg" />}
      
            </Link>
           : true              
          }
          
         
        </div>
      </div>
    </Card>
  );
}

export default ArticleItem;