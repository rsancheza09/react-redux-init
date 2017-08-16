import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import L from 'leaflet';

import { checkIdProvided } from '../../actions';

class Map extends Component {
  constructor(props) {
    super(props);
    const { match } = props;
    this.state = {
      id: match.params.id || false,
    };
  }
  componentDidMount() {
    const mymap = L.map('map').setView([9.9335089, -84.1049781], 12);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 15,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'mapbox.streets',
    }).addTo(mymap);
    if (this.state.id !== 'no-id') {
      this.props.checkIdProvided(this.state.id);
      const geoJSONObj = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [
                [
                  [-84.02613683999994, 9.856724476000068],
                  [-84.15480219999995, 9.859461539000051],
                  [-84.15543919999999, 9.893893985000034],
                  [-84.15618490999998, 9.929161234000048],
                  [-84.15650547999996, 9.963070321000032],
                  [-84.15664249999998, 9.99648055800003],
                  [-84.15670415999995, 10.008752250000043],
                  [-84.02480204999995, 10.00186227000006],
                  [-84.02495529999999, 9.989763737000033],
                  [-84.02533906999997, 9.956333581000024],
                  [-84.02572271999998, 9.923336199000062],
                  [-84.02602734999994, 9.890409562000059],
                  [-84.02613683999994, 9.856724476000068],
                ],
              ],
            },
          },
        ],
      };
      const imageUrl = 'https://scontent.fsyq1-1.fna.fbcdn.net/v/t31.0-8/20287103_10154744435373093_8963484011393136005_o.jpg?oh=e5b6227fe6e764613a84ad58e14d343a&oe=5A340031';
      const imageBounds = [
        [9.856724476000068, -84.02613683999994],
        [9.859461539000051, -84.15480219999995],
        [9.893893985000034, -84.15543919999999],
        [9.929161234000048, -84.15618490999998],
        [9.963070321000032, -84.15650547999996],
        [9.99648055800003, -84.15664249999998],
        [10.008752250000043, -84.15670415999995],
        [10.00186227000006, -84.02480204999995],
        [9.989763737000033, -84.02495529999999],
        [9.956333581000024, -84.02533906999997],
        [9.923336199000062, -84.02572271999998],
        [9.890409562000059, -84.02602734999994],
        [9.856724476000068, -84.02613683999994],
      ];
      L.imageOverlay(imageUrl, imageBounds).addTo(mymap);
      L.geoJSON(geoJSONObj).addTo(mymap);
    }
  }
  render() {
    return <div id="map" />;
  }
}

Map.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  checkIdProvided: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  checkIdProvided(id) {
    return dispatch(checkIdProvided(id));
  },
});

export default connect(null, mapDispatchToProps)(Map);
