import css from '../scss/Home.scss';
import React from 'react';
import HomePic from '../assets/img/banner1.svg';

function Home() {
  return (
    <div>
      <p>This is Home Component</p>
      <img src={HomePic} />
      <div className={css.pic} />
    </div>
  );
}

export default Home;
