import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Product from '../products/Product';
import axios from 'axios';
// dummy data
import { data } from '../../data/Dummydata';

export default function ProductList() {

  const [products, setProducts] = useState(data.productList)

  const addItems = () => {
    console.log('loading...');
    axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((res) => {
        console.log('succeed');
        const data = res.data;
        setProducts([...products, ...data]);
      })
      .catch(() => {
        console.log('error');
      })
  }

  return (
    <>
      <Container className="container-xxl my-4" fluid>
        <Row className="productList">
          {products.map((product, productIdx) => 
            <Product
              key = {product.productCode}
              product={product}
              productIdx={productIdx}
            />
          )}
        </Row>
        <Row className="text-center my-3">
          <Col>
            <Button variant="secondary" onClick={addItems}>Add Items</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
