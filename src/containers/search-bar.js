import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'


class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    //event.target.value is not React; it's just vanilla JS
    this.setState({ term: event.target.value})

  }

  //you always need to prevent default with forms in React
  onFormSubmit(event){
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''});
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        placeholder="Get a five-day forecast in your favorite cities"
        className="form-control"
        value = {this.state.term}
        onChange = {this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    )
  }
}
//button is controlled field (i.e. form element where value of the input is set by the state of the component)

//bindActionCreators ensures that the dispatch flows to the reducers
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

//pass null as first argument because mapDispatchToProps must always be the second argument when used with connect
export default connect(null, mapDispatchToProps)(SearchBar);

//by binding action creator to fetch weather to dispatch and the mapping it to props, gives us access to the function this.props.fetchWeather inside the component
