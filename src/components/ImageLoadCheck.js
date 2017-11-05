/**
 * 判断 image 是否加载完毕
 */
import React from 'react';
import PropTypes from 'prop-types';

class ImageWithStatusText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStatus: ''
    };

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.handleImageError = this.handleImageError.bind(this);
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  handleImageError() {
    this.setState({ imageStatus: 'failed to load' });
  }

  render() {
    return (
      <div>
        <img src={this.props.imageUrl} onLoad={this.handleImageLoaded} onError={this.handleImageError} />
        {this.state.imageStatus}
      </div>
    );
  }
}

ImageWithStatusText.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default ImageWithStatusText;
