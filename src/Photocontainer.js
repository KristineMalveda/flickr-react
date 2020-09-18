import React, { Component } from "react";
import Photos from "./Photos";
import PropTypes from "prop-types";

class Photocontainer extends Component {
  render() {
    const pictures = this.props.photos;

    return (
      <ul className="searchresults__list">
        {pictures.map((picture) => {
          return <Photos key={picture.id} url={picture.srcPath} />;
        })}
      </ul>
    );
  }
}
export default Photocontainer;

//proptypes
Photocontainer.propTypes = {
  photos: PropTypes.array.isRequired,
};
