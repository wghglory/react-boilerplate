import React from 'react';
import ReactDOM from 'react-dom';

// bootstrap core. specific plugin like jumbotron is imported in needed component.
// 以下几个文件时全局，不参与 css modules
import '!style-loader!css-loader!sass-loader!./bootstrap/_core.scss';
import '!style-loader!css-loader!sass-loader!./bootstrap/nav.scss';

import '!style-loader!css-loader!sass-loader!./scss/reset.scss';
import '!style-loader!css-loader!sass-loader!./scss/common.scss';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));
