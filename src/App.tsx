import React from 'react';
import './App.module.scss';
import {TopLine} from './components/topLine/TopLine';
import {Button} from './kit/button/Button';
import {CartIcon} from "./kit/cartIcon/CartIcon";
import {Pagination} from './kit/pagination/Pagination';

function App() {
  return (
    <div className="App">
      <TopLine />

    {/*  TODO: remove!! */}
    <div>
      {/*buttons*/}
      <div style={{backgroundColor: 'black'}}>
        <Button value={'Нажми'} type={'green'}>Нажми</Button>
        <br/>
        <Button value={'Нажми'} type={'white'} />
      </div>

      {/*cart icon*/}
      <CartIcon onClick={() => {}} />

      {/*pagination*/}
      <Pagination
        count={5}
        page={1}
        onChange={(e, page) => {console.log(page)}}
      />
    </div>


    </div>
  );
}

export default App;
