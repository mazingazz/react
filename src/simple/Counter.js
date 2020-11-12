import React, { useReducer } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import qs from 'qs';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

function Counter({ location }) {
  console.log('??', location)
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const detail = query.detail === 'true'; // 쿼리의 파싱결과값은 문자열입니다.
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <>
      <Wrapper>
        <Hello name="template" color="black" isSpecial={true}/>
        <Hello color="pink"/>
      </Wrapper>
      <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        {detail && <p>추가적인 정보가 어쩌고 저쩌고..</p>}
      </div>
    </>
  );
}

export default Counter;