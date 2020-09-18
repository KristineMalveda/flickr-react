import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import Photocontainer from "./Photocontainer";

class App extends Component {
  state = {
    pictures: [],
  };

  search = (inputvalue) => {
    fetch(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=81e61d57864118cacd51f259fcc3c173&tags=${inputvalue}&per_page=30&page=1&format=json&nojsoncallback=1`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        //console.log(json);
        let picArray = json.photos.photo.map((pic, i) => {
          var farmId = pic.farm;
          var serverId = pic.server;
          var id = pic.id;
          var secret = pic.secret;
          var srcPath =
            "https://farm" +
            farmId +
            ".staticflickr.com/" +
            serverId +
            "/" +
            id +
            "_" +
            secret +
            ".jpg";

          return { ...pic, srcPath }; //Rem:Kolla i loggen nu så ser du att det är objekt som loggas som innehåller id
        });

        this.setState({ pictures: picArray });
      })
      .catch((error) => {
        console.log("Oops! Something went wrong...");
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Search searchValue={this.search} />
          <div className="searchresults">
            <Photocontainer photos={this.state.pictures} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
