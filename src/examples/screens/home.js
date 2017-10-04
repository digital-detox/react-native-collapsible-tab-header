// @flow
import React from 'react';
import { View } from 'react-native';
import { defaultProps } from 'recompose';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import styles from '../style';

const Component = ({ style }: {style: Object}) => (
  <View style={style.homeContainer}>
    <Button
      raised
      icon={{ name: 'home', size: 32 }}
      buttonStyle={{ backgroundColor: '#ff4f00' }}
      textStyle={{ textAlign: 'center' }}
      title={'Tabbed Collapsible'}
    />

    <Button
      raised
      icon={{ name: 'home', size: 32 }}
      buttonStyle={{ backgroundColor: '#22E0D1' }}
      textStyle={{ textAlign: 'center' }}
      title={'Not Tabbed Collapsible'}
    />
  </View>
);

export default defaultProps({
  style: styles,
})(Component);
