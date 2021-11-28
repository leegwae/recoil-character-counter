import React from 'react';
import { RecoilRoot } from 'recoil';
import CharacterCounter from './CharacterCounter';

const App = () => {
  return (
    <>
      <h1>Recoil React Counter</h1>
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
    </>
  );
}
export default App;
