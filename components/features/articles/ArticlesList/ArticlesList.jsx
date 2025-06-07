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
          url={"/artists/" + id}
          title={artists.name}
          //description={artists.popularity}
          category={artists.name}
        />
        
      ))}
      
    </Container>
  );
}

export default ArticlesList;