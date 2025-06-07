import styles from './HeroSection.module.scss';
import ArticlesList from "@/components/features/articles/ArticlesList";

function HeroSection(props) {
  // SEE on STATIC ASSETS: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets
  //console.log(props);
  
  return (
    <div 
      className={styles.showcase}
      style={{ backgroundImage: `url(${props.bgImage})` }}
    >
      <div className={styles.overlay}>
        <h1><span>{props.title}</span></h1>
        <p>{props.description}</p>
        <div>
          {props.artistsObject && (<ArticlesList artistsObject={props.artistsObject} />)}
        </div>
        
      </div>
      
    </div>
  );
}

export default HeroSection;