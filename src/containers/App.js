'use strict';

import React, { PureComponent } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import connect from '../redux/connect';

import Map from './Map';

class App extends PureComponent {
  componentDidMount() {
    console.log('Hello From ' + this.props.global.platform);
    console.log('Some Redux bindActionCreators actions...', this.props.actions);

    this.props.actions.searchAutocomplete('Hello');
  }

  render() {
    return (
      <View style={styles.container}>
        <Map />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: StyleSheet.absoluteFillObject
})

const mapState = (state) => ({
  global: state.global
})

export default connect(mapState)(App);
