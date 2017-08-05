import '../scss/Home.scss';
import React from 'react';
import PropTypes from 'prop-types';
import HomePic from '../assets/img/banner1.svg';

function Home() {
  return (
    <div>
      <p>This is Home Component</p>
      <img src={HomePic}/>
      <div className="pic"></div>
    </div>
  );
}

Home.propTypes = {
  hello: PropTypes.string
};

export default Home;