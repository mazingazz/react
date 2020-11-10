import Hello from './Hello'
import './App.css'

function App() {
  const name = 'react'

  return (
    <>
      <Hello name="react" color="red"/>
      <div>{name}</div>
    </>
  );
}

export default App;
