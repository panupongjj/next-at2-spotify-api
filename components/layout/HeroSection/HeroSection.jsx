import styles from './HeroSection.module.scss';


function HeroSection(props) {
  // SEE on STATIC ASSETS: https://nextjs.org/docs/pages/building-your-application/optimizing/static-assets

  return (
    <div 
      className={styles.showcase}
      style={{ backgroundImage: `url(${props.bgImage})` }}
    >
      <div className={styles.overlay}>
        <h1><span>{props.title}</span></h1>
        <p>{props.description}</p>
      </div>
      
    </div>
  );
}

export default HeroSection;