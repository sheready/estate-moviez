import { Card } from 'antd';
import React from 'react';

const { Meta } = Card;

const image = {
    id:"rm2573584384",
    width:800,
    height:300,
    url:"https://m.media-amazon.com/images/M/MV5BZDI4MmJiMmMtMzQ3Mi00N2Y0LTlkYmUtYmQ0ZTQ1NzVlZmVjXkEyXkFqcGdeQXVyMDUyOTUyNQ@@._V1_.jpg"
}

const MovieCard = ({movie : {id, primaryImage, titleType, titleText}}) => (
    <div className='movie' key={id}>
        <Card
            hoverable
            style={{
            width: 340,
            }}
            cover={
                primaryImage !== null ? 
                <img src={primaryImage.url !== 'null' ? 
                primaryImage.url : 'https://m.media-amazon.com/images/M/MV5BMDczNTEzZWEtMmI0YS00YjE1LTlmZmQtOWQzYmQyMGE3YWY4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'}  
                alt={titleType.text} /> : <img src={image.url}
                />
            }
        >
            <Meta title={titleText.text} description={titleType.text}/>
        </Card>
  </div>
);
export default MovieCard;