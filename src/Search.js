import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = { inputvalue: "" };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchValue(this.state.inputvalue);
    this.setState({ inputvalue: "" });
  };
  onChange = (e) => {
    this.setState({ inputvalue: e.target.value });
  };

  onClick(e) {
    alert("unfinished. Gallery is not showing");
  }

  render() {
    //const images = this.props.myimages;

    return (
      <form className="controls" onSubmit={this.onSubmit}>
        <div className="searchField">
          <input
            type="text"
            placeholder="Search Flickr for Photos.. ."
            name="title"
            value={this.state.inputvalue}
            style={{
              border: "1px solid grey",
              borderRadius: "4px",
              height: "40px",
              width: "400px",
              fontSize: "20px",
              padding: "10px",
              marginRight: "10px",
            }}
            onChange={this.onChange}
          ></input>

          <input
            name="submit"
            type="submit"
            value="Submit"
            style={btnStyle}
          ></input>
        </div>
        <div className="gallery-button__wrapper">
          <input
            style={btnStyle}
            className="gallery"
            type="button"
            value="Show Gallery"
            onClick={this.onClick}
          ></input>
        </div>
      </form>
    );
  }
}

const btnStyle = {
  minWidth: "60px",
  height: "40px",
  fontSize: "14px",
  lineHeight: "24px",
  padding: "3px",
  borderRadius: "10px",
  border: "2px solid #616161",
  backgroundColor: "white",
};
export default Search;
//proptypes
Search.propTypes = {
  searchValue: PropTypes.func.isRequired,
};
