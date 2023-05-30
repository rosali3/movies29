import { useState, useEffect } from 'react';
import { Layout, Col, Row, Spin } from 'antd';
import Movies from '../components/Movies';
import Search from '../components/Search';


const { Content } = Layout;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c6261ae7`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

  useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);
  

  return (
    <>

      <Content className='p-5'>
        <Row>
          <Col xs={24} sm={{ span: 22, offset: 1 }} lg={{ span: 18, offset: 3 }} xl={{ span: 14, offset: 5 }}>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <Row className='justify-center' gutter={[32, 32]}>
              {
                movies.length ?
                  <Movies movies={movies} />
                  : <Spin size="large" tip="Loading..." />
              }
            </Row>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default Main;