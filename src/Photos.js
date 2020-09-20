import React, { Component } from "react";

class Photos extends Component {
 

  render() {
    const url = this.props.url;
    const addPicsProp = this.props.addPicsProp;

    

    return (
      <li>
        <img
          className="not_Selected"
          alt="missing pix"
          src={url}
          onClick={addPicsProp}
        />
      </li>
    );
  }
}
export default Photos;
