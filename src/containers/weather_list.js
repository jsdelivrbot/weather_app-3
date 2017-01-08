import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {
  renderWeather(cityData){
    let name = cityData.city.name;
    let temps = cityData.list.map(weather => weather.main.temp);
    let pressures = cityData.list.map(weather => weather.main.pressure);
    let humidities = cityData.list.map(weather => weather.main.humidity);
    // let lon = cityData.city.coord.lon;
    // let lat = cityData.city.coord.lat;
    // destructured version:
    let { lon, lat } = cityData.city.coord;



    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} units="K" color="orange" /></td>
        <td><Chart data={pressures} units="hPa" color="green" /></td>
        <td><Chart data={humidities} units="%" color="green" /></td>
      </tr>
    );
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

//use state.weather because we used weather as the key in the reducer
// function mapStateToProps(state){
//   return { weather: state.weather }
// }
//refactor w/ ES6 magic
// function mapStateToProps({ weather }){
//   return { weather: weather }
// }
//refactor w/ EVEN MORE ES6 magic
function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
