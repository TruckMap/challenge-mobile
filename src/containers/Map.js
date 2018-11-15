'use strict';

import React, { PureComponent } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import connect from '../redux/connect';

import MapView from 'react-native-maps';

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      search: props.search,
      user: props.user
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      search: props.search,
      user: props.user
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
    );
  }
}

const fill = StyleSheet.absoluteFillObject;

const styles = StyleSheet.create({
  container: fill,
  map: fill
})

const mapState = (state) => ({
  search: state.search,
  user: state.user
})

export default connect(mapState)(Map);
