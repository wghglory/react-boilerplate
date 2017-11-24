# React Boilerplate

Support css modules

## Running Project

```bash
yarn
npm start
```

## Caveat

目前 css 实现了 modules。对于一些 bootstrap 或者字体图标，通过以下方式不参与 css modules，全局样式。

```javascript
import '!style-loader!css-loader!sass-loader!./bootstrap/_core.scss';
```