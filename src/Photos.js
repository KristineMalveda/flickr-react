import React, { Component } from "react";

class Photos extends Component {
  render() {
    let onClick = (e) => {
      console.log(e.target);
     
    };

    const url = this.props.url;

    return (
      <li>
        <img alt="missing pix" src={url} onClick={onClick}></img>
      </li>
    );
  }
}
export default Photos;
