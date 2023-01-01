import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ROUTE_PATH } from '../../route/route';

export default function Product({
  product
}) {
  return (
    <Col sm={4}>
      <Link to={`${ROUTE_PATH.PRODUCT}/${product.productCode}`}>
        <img src={product.imgUrl} />
      </Link>
      <h4>{product.title}</h4>
      <p>{product.content}</p>
    </Col>
  );
}
