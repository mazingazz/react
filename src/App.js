import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Reducer';
import HookDefault from './hookDefault'
import ReducerDefault from './reducerDefault'

function App() {
  return (
    <>
      <Wrapper>
        <Hello name="template" color="black" isSpecial={true}/>
        <Hello color="pink"/>
      </Wrapper>
      <Counter />
      <br/>
      <HookDefault />
      <br/>
      <ReducerDefault />
    </>
  );
}

export default App;