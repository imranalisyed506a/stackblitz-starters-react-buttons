import * as React from 'react';
import Hello from './Hello';
import './style.css';

export default function App() {
  const c = Array(100).fill(1);
  function onClickHandler(event) {
    console.log(event.target.innerHTML);
  }
  const d = c.map((cc, index: any) => {
    return <Hello name={index} key={index} onClickHandler={onClickHandler} />;
  });
  return <div> {d} </div>;
}
