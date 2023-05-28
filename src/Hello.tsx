import * as React from 'react';

export default function Hello({ name, onClickHandler }: any) {
  return <button onClick={onClickHandler}> {name} </button>;
}
