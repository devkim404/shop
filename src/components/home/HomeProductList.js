import { Container, Row } from 'react-bootstrap';
import HomeProduct from './HomeProduct';
// dummy data
import { data } from '../../data/dummydata';

const mainProductList = data.mainProductList;

export default function HomeProductList() {
  return (
    <Container className="container-xxl my-4" fluid>
      <Row className="mainProductList">
        {mainProductList.map((product, productIdx) => 
          <HomeProduct
            key = {product.sequence}
            productIdx={productIdx}
           />
        )}
      </Row>
    </Container>
  );
}
