import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import logo from './logo.svg';

import './App.css';
import { searchGiphs } from './features/test/testSlice';
import { useAppDispatch } from './app/hooks';
import { RootState } from './app/store';
import { Card } from './components/Card';
import { GiphyContainer } from './style';
import { Modal } from './components/Modal';

function App() {
  const dispatch = useAppDispatch();
  const { data, status } = useSelector((state: RootState) => state.giphyData);
  const [searchData, setSearchData] = useState('');

  const [showModal, setShowModal] = useState(false);

  console.log(data);

  return (
    <div className="App">
      {showModal ? <Modal data={data} /> : ''}
      <header className="App-header">
        <input placeholder="search the giphy" onChange={(e) => setSearchData(e.target.value)} />
        <button onClick={() => dispatch(searchGiphs(searchData))}>Search for the gyph</button>
        <div />
        <GiphyContainer>
          {data.map((item: any) => (
            <Card image={item.images?.original.url} onClick={() => setShowModal(true)} />
          ))}
        </GiphyContainer>
        <span>{status}</span>
      </header>
    </div>
  );
}

export default App;
