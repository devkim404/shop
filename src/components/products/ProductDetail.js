import { useState, useEffect } from 'react';
import { Container, Row, Col, Alert, Button, Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import TabContent from '../common/tab/TabContent';
// dummy data
import { data } from '../../data/Dummydata';

export default function ProductDetail() {

  const [count, setCount] = useState(10);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count-1);
    }, 1000)
  }, [count])

  const { id } = useParams();
  const productList = data.productList;
  const product = productList.find((e) => e.productCode === id);

  return (
    <Container>
      {count > 0 &&
        <Alert variant={'warning'} className="my-3">
          {count}초 이내 구매시 할인
        </Alert>
      }
      <Row className="productDetail">
        <Col md={6}>
          <img src={product.imgUrl} />
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}원</p>
          <Button variant="danger">주문하기</Button>
        </Col>
      </Row>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => {setTabIndex(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => {setTabIndex(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => {setTabIndex(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 
        tabIndex={tabIndex}
      />
    </Container>
  );
}
