import { Card } from 'antd';
import React from 'react';
const { Meta } = Card;

const MovieCard = ({movie1}) => (
    <div className='movie'>
        <Card
            hoverable
            style={{
            width: 240,
            }}
            cover={<img src={movie1.primaryImage.url !== 'null' ? movie1.primaryImage.url : 'https://m.media-amazon.com/images/M/MV5BMDczNTEzZWEtMmI0YS00YjE1LTlmZmQtOWQzYmQyMGE3YWY4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'}  
            alt={movie1.title} />}
        >
            <Meta title={movie1.titleText.text} description={movie1.titleType.text}/>
        </Card>
    </div>
);
export default MovieCard;