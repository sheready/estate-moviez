import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;

const MovieCard = ({movie : {id,primaryImage, titleType, titleText}}) => (
    <div className='movie' key={id}>
        <Card
            hoverable
            style={{
            width: 340,
            }}
            cover={<img src={primaryImage.url !== 'null' ? primaryImage.url : 'https://m.media-amazon.com/images/M/MV5BMDczNTEzZWEtMmI0YS00YjE1LTlmZmQtOWQzYmQyMGE3YWY4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'}  
            alt={titleType.text} />}
        >
            <Meta title={titleText.text} description={titleType.text}/>
        </Card>
  </div>
);
export default MovieCard;