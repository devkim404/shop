import { Col } from 'react-bootstrap';

export default function HomeProduct({
  productIdx
}) {
  return (
    <Col sm={4}>
      <img src={`https://codingapple1.github.io/shop/shoes${productIdx + 1}.jpg`} />
      <h4>상품명</h4>
      <p>상품정보</p>
    </Col>
  );
}
