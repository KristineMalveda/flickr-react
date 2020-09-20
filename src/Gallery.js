import React, { Component } from "react";
import PropTypes from "prop-types";

class Gallery extends Component {
  render() {
    const myGallery = this.props.myimages;

    return (
      <div>
        {myGallery.map((image) => (
          <div key={image.id}>
            <img src={image.url} alt={image.id} />)
          </div>
        ))}
      </div>
    );
  }
}
Gallery.propTypes = { myimages: PropTypes.array.isRequired };

export default Gallery;
