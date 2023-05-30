import React from 'react';
import { Card, Col } from 'antd';
const { Meta } = Card;

const Movie = (props) => {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <>
      <Col xs={24} sm={12} md={8} lg={6}>
        <Card
          hoverable
          cover={
            poster === 'N/A' ?
              (<img alt={title} src={`https://via.placeholder.com/253x377?text=${title}`} />)
              : < img alt={title} src={poster} />
          } >
        <Meta title={title} description={`${year} ${type}`} />
      </Card>
    </Col>
    </>
  );
};

export default Movie;