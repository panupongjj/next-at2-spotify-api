import ArticleItem from '../ArticleItem/ArticleItem'
import Container from '@/components/common/Container/Container';

function ArticlesList(props) {
  //const { artistsObject } = props;
  
  return (
    <Container>
      {Object.entries(props.artistsObject).map(([id, artists], index) => (
        <ArticleItem
          key={id ? id : index }
          id={id ? id : index }
          //image={artists.images[1]?.url}
          urlToImage={artists.images[1]?.url}
          url={"/" + id}
          spotifyUrl={artists.external_urls.spotify}
          title={artists.name}
          //description={artists.popularity}
          category={artists.name}
          type = {artists.type}
        />
        
      ))}
      
    </Container>
  );
}

export default ArticlesList;