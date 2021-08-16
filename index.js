/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken('<PASTE_ACCESS_TOKEN_HERE>');

AppRegistry.registerComponent(appName, () => App);
