import React, { Component } from "react";
import axios from "axios";

class MovieCard extends Component {

  componentDidMount = () => {
    console.log('did mounted');
    axios.get('https://data.tmsapi.com/v1.1/movies/showings', {
      params: {
        startDate: '2018-10-20',
        zip: '92606',
        dataType: 'json',
        api_key: 'dgf69zqkhraznhf7zzdaee2r',
      }
    })
      .then(resp => {
        console.table(resp.data);
        this.setState({ response: resp.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      this.state.response.map(resp => {
        return (
          <img
            src={
              `http://developer.tmsimg.com/${resp.preferredImage.uri}?api_key=dgf69zqkhraznhf7zzdaee2r`
            }
            onClick={this.handleClick}
          />
        )
      })
    );
  }
}

export default MovieCard;
