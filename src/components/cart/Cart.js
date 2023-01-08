import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { increase, addCount } from '../../hooks/store';

export default function Cart() {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const cart = state.cart;

  return (
    <>
      <h2>
        {state.user.name}{state.user.age}의 장바구니
      </h2>
      <Button variant="secondary" onClick={() => {
        dispatch(increase());
      }}>+</Button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart.map((product, productIdx) => (
              <tr key={cart[productIdx].id}>
                <td>{cart[productIdx].id}</td>
                <td>{cart[productIdx].name}</td>
                <td>{cart[productIdx].count}</td>
                <td>
                  <Button variant="secondary" onClick={() => {
                    dispatch(addCount(cart[productIdx].id));
                  }}>+</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  )
}