/**
 * 判断 image 是否加载完毕
 */
import React from 'react';

class ImageWithStatusText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageStatus: ''
    };
  }

  handleImageLoaded() {
    this.setState({imageStatus: 'loaded'});
  }

  handleImageError() {
    this.setState({imageStatus: 'failed to load'});
  }

  render() {
    return (
      <div>
        <img src={this.props.imageUrl} onLoad={this.handleImageLoaded.bind(this)} onError={this.handleImageError.bind(this)}/>
        {this.state.imageStatus}
      </div>
    );
  }
}
export default ImageWithStatusText;